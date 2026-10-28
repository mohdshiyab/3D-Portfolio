import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SUGGESTED_QUESTIONS, getAnswer } from '../data/chatbotKnowledge';
import { askAI } from '../services/aiService';

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: `Hey, I'm ${PERSONAL_INFO.shortName}'s portfolio assistant 👋 Ask me anything about his skills, projects, Stellapps data engineering role, or career goals!`,
  actions: [],
};

// Formats bot text: parses markdown links, URLs, **bold**, *italic*, `code`, bullet points, headers, and numbered lists into sleek UI elements
function FormattedMessage({ text }) {
  if (!text) return null;

  const lines = text.split('\n');

  const renderInline = (str) => {
    if (!str) return '';

    // Clean stray trailing asterisk like "Engineering*"
    const cleanStr = str.replace(/([a-zA-Z0-9\)])\*(?!\*)/g, '$1');

    const regex = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|https?:\/\/[^\s<]+|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;
    const parts = [];
    let lastIdx = 0;
    let match;

    while ((match = regex.exec(cleanStr)) !== null) {
      if (match.index > lastIdx) {
        parts.push(cleanStr.substring(lastIdx, match.index).replace(/\*/g, ''));
      }
      const token = match[0];

      if (token.startsWith('[') && token.includes('](')) {
        const linkMatch = token.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          parts.push(
            <a
              key={match.index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#FF5555] hover:text-white underline underline-offset-2 decoration-[#FF2A2A]/70 hover:decoration-white transition-colors"
            >
              <span>{label}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          );
        } else {
          parts.push(token);
        }
      } else if (token.startsWith('http://') || token.startsWith('https://')) {
        let cleanUrl = token;
        let trailing = '';
        while (['.', ',', ';', ')'].includes(cleanUrl.slice(-1))) {
          trailing = cleanUrl.slice(-1) + trailing;
          cleanUrl = cleanUrl.slice(0, -1);
        }
        parts.push(
          <a
            key={match.index}
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[12px] text-[#FF5555] hover:text-white underline underline-offset-2 decoration-[#FF2A2A]/70 hover:decoration-white transition-colors break-all"
          >
            <span>{cleanUrl}</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        );
        if (trailing) parts.push(trailing);
      } else if (token.startsWith('**') && token.endsWith('**')) {
        parts.push(
          <strong key={match.index} className="text-white font-semibold">
            {token.slice(2, -2)}
          </strong>
        );
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push(
          <strong key={match.index} className="text-white font-medium">
            {token.slice(1, -1)}
          </strong>
        );
      } else if (token.startsWith('`') && token.endsWith('`')) {
        parts.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded text-[11.5px] font-mono text-[#FF7070] bg-white/10 border border-white/10">
            {token.slice(1, -1)}
          </code>
        );
      }
      lastIdx = regex.lastIndex;
    }

    if (lastIdx < cleanStr.length) {
      parts.push(cleanStr.substring(lastIdx).replace(/\*/g, ''));
    }

    return parts.length > 0 ? parts : cleanStr.replace(/\*/g, '');
  };

  return (
    <div className="space-y-1.5 text-[13px] leading-relaxed">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // Markdown header: #, ##, ###, ####
        const headingMatch = trimmed.match(/^#{1,4}\s+(.*)$/);
        if (headingMatch) {
          const headingText = headingMatch[1].replace(/[*_#]/g, '').trim();
          return (
            <div key={idx} className="pt-2 pb-0.5 text-[12px] font-semibold text-[#FF6666] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
              <span>{headingText}</span>
            </div>
          );
        }

        // Bullet point: •, -, *, +
        if (
          trimmed.startsWith('•') ||
          trimmed.startsWith('- ') ||
          trimmed.startsWith('* ') ||
          trimmed.startsWith('+ ')
        ) {
          const content = trimmed.replace(/^[•\-*+]\s*/, '');
          return (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shrink-0 mt-2" />
              <div className="flex-1">{renderInline(content)}</div>
            </div>
          );
        }

        // Numbered list item: e.g. "1. " or "2. "
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          return (
            <div key={idx} className="flex items-start gap-2 text-gray-300">
              <span className="text-[#FF2A2A] font-mono text-[11px] font-bold shrink-0 mt-0.5">
                {numMatch[1]}.
              </span>
              <div className="flex-1">{renderInline(numMatch[2])}</div>
            </div>
          );
        }

        // Normal text line
        return (
          <p key={idx} className="text-gray-200">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      const onKey = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        clearTimeout(t);
        window.removeEventListener('keydown', onKey);
      };
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { sender: 'user', text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await askAI(messages, trimmed);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: response.text,
          actions: response.actions,
          source: response.source,
        },
      ]);
    } catch (err) {
      console.warn('Real AI error, falling back to local engine:', err);
      const fallback = getAnswer(trimmed);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: fallback.text,
          actions: fallback.actions,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[70] w-14 h-14 rounded-full bg-[#FF2A2A] text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,42,42,0.55)] hover:shadow-[0_0_40px_rgba(255,42,42,0.85)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#FF2A2A] animate-ping opacity-40 pointer-events-none" />
        )}
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Portfolio chat assistant"
          className="fixed z-[65] bottom-[92px] sm:bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[70vh] max-h-[560px] rounded-2xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden animate-[fadeIn_0.25s_ease-out]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02] shrink-0">
            <div className="relative w-9 h-9 rounded-full bg-[#FF2A2A]/15 border border-[#FF2A2A]/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#FF2A2A]" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#2ecc71] border-2 border-[#0a0a0a]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate flex items-center gap-1.5">
                <span>Ask about {PERSONAL_INFO.shortName}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#FF2A2A]/20 border border-[#FF2A2A]/35 text-[#FF2A2A] font-semibold">
                  AI
                </span>
              </div>
              <div className="text-[11px] text-gray-400 font-mono flex items-center gap-1.5">
                <span>Powered by Gemini AI</span>
                <span>·</span>
                <span className="text-emerald-400">Live</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#FF2A2A] text-white rounded-br-sm whitespace-pre-line'
                      : 'bg-white/[0.05] border border-white/10 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.sender === 'user' ? msg.text : <FormattedMessage text={msg.text} />}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 pt-2.5 border-t border-white/10">
                      {msg.actions.map((a) => (
                        <a
                          key={a.label}
                          href={a.href}
                          target={a.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#FF2A2A]/20 hover:text-[#FF2A2A] text-white transition-colors"
                        >
                          {a.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/[0.05] border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                </div>
              </div>
            )}

            {/* Quick suggestions — shown until the user has sent at least one message */}
            {messages.length === 1 && !isTyping && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15 text-gray-300 hover:border-[#FF2A2A]/50 hover:text-white hover:bg-[#FF2A2A]/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-white/10 bg-white/[0.02] shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects…"
              className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-[13px] text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2A2A]/50 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="w-10 h-10 shrink-0 rounded-xl bg-[#FF2A2A] text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#ff3b3b] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
