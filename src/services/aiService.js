// High-Speed AI Service for Shiyab's Portfolio Assistant
// Secure: Zero client-side API keys. All external requests route through /api/chat.
// Resilient: Instant offline knowledge-base fallback if serverless function or network is unreachable.

import { getAnswer } from '../data/chatbotKnowledge.js';
import { PERSONAL_INFO, FEATURED_PROJECT } from '../data/portfolioData.js';

const GREETING_WORDS = new Set([
  'hi', 'hello', 'hey', 'sup', 'yo', 'wassup', 'whatsup', 'wazzup',
  'howdy', 'hola', 'namaste', 'greetings', 'hiya', 'heya'
]);

const GREETING_PHRASES = [
  "what's up", "whats up", "how are you", "how r u", "how do you do",
  "good morning", "good evening", "good afternoon", "good day",
  "hey there", "hi there"
];

function isGreeting(str) {
  if (!str) return false;
  const lower = str.toLowerCase().trim();
  if (GREETING_PHRASES.some((p) => lower.includes(p))) return true;

  const words = lower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  if (words.length <= 4 && words.some((w) => GREETING_WORDS.has(w))) {
    return true;
  }
  return false;
}

function isPleasantry(str) {
  if (!str) return false;
  const lower = str.toLowerCase().trim();
  const pleasantryWords = ['thanks', 'thank you', 'thx', 'cool', 'awesome', 'great', 'nice', 'perfect', 'ok', 'okay'];
  const words = lower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  return words.length <= 3 && words.some((w) => pleasantryWords.includes(w));
}

/**
 * Contextual action pills for key topics.
 */
function getContextActions(userText, aiResponse) {
  const text = (userText + ' ' + (aiResponse || '')).toLowerCase();
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
 * Main AI Query Dispatcher.
 * 1. Instant friendly greetings (< 5ms).
 * 2. Route exclusively through secure /api/chat serverless proxy.
 * 3. Graceful fallback to rich local knowledge base if server/network is offline.
 */
export async function askAI(conversationMessages, newQuery) {
  const trimmed = (newQuery || '').trim().slice(0, 500); // 500 chars client limit
  if (!trimmed) {
    return { text: '', actions: [] };
  }

  // 1. Instant friendly response for greetings (< 5ms, 0 latency, no API quota burn)
  if (isGreeting(trimmed)) {
    return {
      text: `Hey! 👋 I'm Shiyab's AI portfolio assistant.\n\nI can answer anything about his **Stellapps data engineering internship**, technical skills, AI healthcare capstone (Healix), hackathon wins, or job availability. What would you like to know?`,
      actions: [
        { label: 'Download Résumé', href: PERSONAL_INFO.resumeUrl },
        { label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin },
      ],
      source: 'instant',
    };
  }

  // 2. Instant friendly response for pleasantries (thanks, cool, ok)
  if (isPleasantry(trimmed)) {
    return {
      text: `You're very welcome! Feel free to ask anything else about Shiyab's work, or connect directly through the links below.`,
      actions: [
        { label: 'Email Shiyab', href: `mailto:${PERSONAL_INFO.email}` },
        { label: 'LinkedIn Profile', href: PERSONAL_INFO.socials.linkedin },
      ],
      source: 'instant',
    };
  }

  // Build clean alternating conversation history for the serverless function
  const recentHistory = [];
  let lastRole = null;

  for (const m of conversationMessages.slice(-4)) {
    if (!m.text || m.text.startsWith("Hey, I'm")) continue;
    const role = m.sender === 'user' ? 'user' : 'model';
    if (role !== lastRole) {
      recentHistory.push({
        role,
        parts: [{ text: m.text.slice(0, 500) }],
      });
      lastRole = role;
    }
  }

  if (lastRole === 'user') {
    recentHistory[recentHistory.length - 1].parts[0].text += `\n${trimmed}`;
  } else {
    recentHistory.push({
      role: 'user',
      parts: [{ text: trimmed }],
    });
  }

  // 3. Dispatch to secure /api/chat serverless endpoint
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch('/api/chat', {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: recentHistory }),
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data?.text) {
        return {
          text: data.text,
          actions: getContextActions(trimmed, data.text),
          source: 'gemini-serverless',
        };
      }
    }
  } catch {
    // Pass through to local knowledge base fallback seamlessly
  }

  // 4. Instant local knowledge engine (0ms latency fallback)
  const localAnswer = getAnswer(trimmed);
  return {
    ...localAnswer,
    source: 'knowledge-base',
  };
}
