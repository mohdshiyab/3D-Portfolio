import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { getAnswer, SUGGESTED_QUESTIONS } from '../data/chatbotKnowledge';

const INITIAL_MESSAGE = {
  sender: 'bot',
  text: `Hey, I'm ${PERSONAL_INFO.shortName}'s portfolio assistant 👋 Ask me anything about his skills, projects, experience, or journey so far.`,
  actions: [],
};

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

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setMessages((prev) => [...prev, { sender: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);

    const delay = 450 + Math.min(trimmed.length * 12, 700);
    setTimeout(() => {
      const { text: answer, actions } = getAnswer(trimmed);
      setMessages((prev) => [...prev, { sender: 'bot', text: answer, actions }]);
      setIsTyping(false);
    }, delay);
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
              <div className="text-sm font-semibold text-white truncate">Ask about {PERSONAL_INFO.shortName}</div>
              <div className="text-[11px] text-gray-400 font-mono">Answers from his résumé & projects</div>
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
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#FF2A2A] text-white rounded-br-sm'
                      : 'bg-white/[0.05] border border-white/10 text-gray-200 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
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
