// Vercel Serverless Function: Secure Google Gemini AI Proxy
// Keeps GEMINI_API_KEY strictly on the server side
// Features: Rate-limiting, strict payload validation, input limits, and sanitized error responses.

import { AI_SYSTEM_PROMPT } from '../src/services/aiSystemPrompt.js';

// In-memory rate limiting map: IP -> { count, resetTime }
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20;     // Max 20 queries/minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

// Clean up stale rate-limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // 1. IP Rate Limiting
  const clientIp = (
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'anonymous'
  ).split(',')[0].trim();

  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      error: 'Too many requests. Please wait a moment before sending another query.',
    });
  }

  // 2. Server-side API Key check (NEVER expose to client)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: 'AI service is temporarily unavailable (API key not configured on server).',
    });
  }

  // 3. Payload & Input Validation
  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Invalid payload: messages array is required.' });
  }

  // Cap history length to prevent token abuse
  if (messages.length > 10) {
    return res.status(400).json({ error: 'Payload exceeds maximum history length (10 messages).' });
  }

  // Validate and sanitize each message
  let totalChars = 0;
  const sanitizedMessages = [];

  for (const m of messages) {
    if (!m || typeof m !== 'object') {
      return res.status(400).json({ error: 'Invalid message structure.' });
    }

    const role = m.role === 'model' ? 'model' : 'user';
    const textPart = m.parts?.[0]?.text;

    if (typeof textPart !== 'string') {
      return res.status(400).json({ error: 'Each message must include a text part string.' });
    }

    const cleanText = textPart.trim().slice(0, 800); // 800 chars per message limit
    totalChars += cleanText.length;

    sanitizedMessages.push({
      role,
      parts: [{ text: cleanText }],
    });
  }

  if (totalChars > 3500) {
    return res.status(400).json({ error: 'Total message content exceeds character limit (3500 chars).' });
  }

  // 4. Model Cascade with Strict Timeout
  const models = ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest'];

  for (const model of models) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000);

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: AI_SYSTEM_PROMPT }],
          },
          contents: sanitizedMessages,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 320,
          },
        }),
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if (reply.trim()) {
          return res.status(200).json({ text: reply.trim() });
        }
      }
    } catch {
      // Continue to fallback model
    }
  }

  return res.status(502).json({
    error: 'Unable to reach AI services at this moment. Please use local suggestions.',
  });
}
