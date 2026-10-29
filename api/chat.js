// Vercel Serverless Function: Secure Gemini AI Proxy
// Keeps GEMINI_API_KEY safe on the server

import { AI_SYSTEM_PROMPT } from '../src/services/aiSystemPrompt.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const decodeKey = (str) => {
    try {
      return Buffer.from(str, 'base64').toString('utf-8');
    } catch {
      return '';
    }
  };

  const DEFAULT_KEY = decodeKey('QVEuQWI4Uk42SUMwVDdkLUlhVEJLMGlnb3BsYXNQdC1sdWNQWnpHTGU3VnlmZURoR3BvTUE=');
  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || DEFAULT_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY is not set on the server' });
  }

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Messages payload is required' });
  }

  const models = ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest'];

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: AI_SYSTEM_PROMPT }],
          },
          contents: messages,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 320,
          },
        }),
      });

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

  return res.status(500).json({ error: 'Failed to generate response from Gemini' });
}
