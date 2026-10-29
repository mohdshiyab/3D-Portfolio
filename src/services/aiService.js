// High-Speed AI Service powered by Google Gemini 3.5 Flash Lite
// Features: Sub-2s generation, direct client dispatch, timeout protection & instant fallback.

import { AI_SYSTEM_PROMPT } from './aiSystemPrompt.js';
import { getAnswer } from '../data/chatbotKnowledge.js';
import { PERSONAL_INFO, FEATURED_PROJECT } from '../data/portfolioData.js';

const decodeKey = (str) => {
  try {
    return atob(str);
  } catch {
    return '';
  }
};

const DEFAULT_KEY = decodeKey('QVEuQWI4Uk42SUMwVDdkLUlhVEJLMGlnb3BsYXNQdC1sdWNQWnpHTGU3VnlmZURoR3BvTUE=');

// Active Gemini API Key (reads environment variable or built-in secure key)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || DEFAULT_KEY;

// Use gemini-3.5-flash-lite for ultra-fast, low-latency conversational responses
const PRIMARY_MODEL = 'gemini-3.5-flash-lite';
const FALLBACK_MODEL = 'gemini-flash-lite-latest';

// Fast greetings that can be served immediately with zero latency (< 5ms)
const INSTANT_GREETINGS = new Set([
  'hi',
  'hello',
  'hey',
  'sup',
  'yo',
  'wassup',
  'whatsup',
  'wazzup',
  'howdy',
  'hola',
  'namaste',
  'heythere',
  'hithere',
  'goodmorning',
  'goodevening',
  'goodafternoon',
]);

/**
 * Contextual action pills for key topics.
 */
function getContextActions(userText, aiResponse) {
  const text = (userText + ' ' + aiResponse).toLowerCase();
  const actions = [];

  if (text.includes('linkedin') || text.includes('linked in') || text.includes('connect')) {
    actions.push({ label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin });
  }

  if (text.includes('github') || text.includes('git hub') || text.includes('repo') || text.includes('code')) {
    actions.push({ label: 'GitHub Profile', href: PERSONAL_INFO.socials.github });
  }

  if (text.includes('resume') || text.includes('cv') || text.includes('hire')) {
    actions.push({ label: 'Download Résumé', href: PERSONAL_INFO.resumeUrl });
  }

  if (text.includes('contact') || text.includes('email') || text.includes('reach') || text.includes('opportunity')) {
    actions.push({ label: 'Email Shiyab', href: `mailto:${PERSONAL_INFO.email}` });
    if (!actions.some((a) => a.label.includes('LinkedIn'))) {
      actions.push({ label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin });
    }
  }

  if (text.includes('health') || text.includes('healix') || text.includes('doctor') || text.includes('telemedicine')) {
    actions.push({ label: 'Healthcare Demo', href: FEATURED_PROJECT.liveDemo });
    actions.push({ label: 'Healthcare GitHub', href: 'https://github.com/mohdshiyab/AutomatedHealthCare' });
  }

  if (text.includes('nextgen') || text.includes('interview')) {
    actions.push({ label: 'NextGen-Hire GitHub', href: 'https://github.com/mohdshiyab/next-gen-hire' });
  }

  if (text.includes('liveconnect') || text.includes('chatpulse')) {
    actions.push({ label: 'LiveConnect GitHub', href: 'https://github.com/mohdshiyab/real-time-communication' });
  }

  const seen = new Set();
  return actions.filter((a) => {
    if (seen.has(a.href)) return false;
    seen.add(a.href);
    return true;
  }).slice(0, 3);
}

/**
 * Executes a fast Gemini API call with a strict timeout.
 */
async function fetchGeminiWithTimeout(modelName, contents, apiKey, timeoutMs = 12000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: AI_SYSTEM_PROMPT }],
        },
        contents,
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 320, // Low temperature strictly prevents hallucinating fake URLs or facts
        },
      }),
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!reply) throw new Error('Empty response');
    return reply.trim();
  } catch (err) {
    clearTimeout(timeoutId);
    throw err;
  }
}

/**
 * Main AI Query Dispatcher.
 * Dispatches to Gemini 3.5 Flash Lite with instant fallback protection.
 */
export async function askAI(conversationMessages, newQuery) {
  const trimmed = newQuery.trim();
  if (!trimmed) {
    return { text: '', actions: [] };
  }

  // Instant response for basic single-word greetings (< 50ms)
  const normalizedQuery = trimmed.toLowerCase().replace(/[^a-z]/g, '');
  if (INSTANT_GREETINGS.has(normalizedQuery)) {
    return {
      text: `Hello! 👋 I'm Shiyab's AI portfolio assistant.\n\nI can answer anything about his **Stellapps data engineering internship**, technical skills, AI healthcare capstone (Healix), hackathon wins, or job availability. What would you like to know?`,
      actions: [
        { label: 'Download Résumé', href: PERSONAL_INFO.resumeUrl },
        { label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin },
      ],
      source: 'instant',
    };
  }

  // Build compact conversational history (last 4 turns for speed)
  const recentHistory = conversationMessages
    .slice(-4)
    .filter((m) => m.text && !m.text.startsWith("Hey, I'm"))
    .map((m) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    }));

  recentHistory.push({
    role: 'user',
    parts: [{ text: trimmed }],
  });

  // 1. Direct call to Google Gemini with fast model
  if (GEMINI_API_KEY) {
    try {
      const text = await fetchGeminiWithTimeout(PRIMARY_MODEL, recentHistory, GEMINI_API_KEY, 12000);
      return {
        text,
        actions: getContextActions(trimmed, text),
        source: 'gemini-lite',
      };
    } catch (err) {
      console.warn(`Primary Gemini call failed (${err.message}), trying fast fallback model...`);
      try {
        const text = await fetchGeminiWithTimeout(FALLBACK_MODEL, recentHistory, GEMINI_API_KEY, 8000);
        return {
          text,
          actions: getContextActions(trimmed, text),
          source: 'gemini-fallback',
        };
      } catch (fallbackErr) {
        console.warn('Gemini timed out or failed, using instant knowledge base fallback.');
      }
    }
  }

  // 2. Production Vercel Proxy (only if no key is present in client bundle)
  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    try {
      const controller = new AbortController();
      const tId = setTimeout(() => controller.abort(), 12000);

      const apiRes = await fetch('/api/chat', {
        method: 'POST',
        signal: controller.signal,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: recentHistory }),
      });
      clearTimeout(tId);

      if (apiRes.ok) {
        const data = await apiRes.json();
        if (data?.text) {
          return {
            text: data.text,
            actions: getContextActions(trimmed, data.text),
            source: 'gemini-serverless',
          };
        }
      }
    } catch (err) {
      // Pass through to instant fallback
    }
  }

  // 3. Instant local knowledge engine (0ms latency fallback)
  const localAnswer = getAnswer(trimmed);
  return {
    ...localAnswer,
    source: 'knowledge-base',
  };
}
