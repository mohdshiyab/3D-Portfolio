import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal, Minimize2 } from 'lucide-react';
import confetti from 'canvas-confetti';

// ─── Command Definitions ───────────────────────────────────────────────────
const COMMANDS = {
  help: {
    desc: 'List all available commands',
    output: () => [
      { type: 'info', text: '╔══════════════════════════════════════════════════╗' },
      { type: 'info', text: '║        SHIYAB OS v2.0 — TERMINAL INTERFACE       ║' },
      { type: 'info', text: '╚══════════════════════════════════════════════════╝' },
      { type: 'spacer' },
      { type: 'cmd', label: 'help',              desc: 'Display this help menu' },
      { type: 'cmd', label: 'skills --level=production', desc: 'List production-ready skills' },
      { type: 'cmd', label: 'skills --level=all', desc: 'List every skill' },
      { type: 'cmd', label: 'cat stellapps_internship.log', desc: 'View internship experience' },
      { type: 'cmd', label: 'cat healix.log',    desc: 'View flagship project summary' },
      { type: 'cmd', label: 'git log --oneline', desc: 'Recent commits & contributions' },
      { type: 'cmd', label: 'whoami',            desc: 'Developer bio' },
      { type: 'cmd', label: 'contact --info',    desc: 'Get contact details' },
      { type: 'cmd', label: 'sudo hire-shiyab',  desc: '🔴 Take the most important action' },
      { type: 'cmd', label: 'clear',             desc: 'Clear terminal' },
      { type: 'spacer' },
    ],
  },

  whoami: {
    desc: 'Developer bio',
    output: () => [
      { type: 'spacer' },
      { type: 'accent', text: '> Mohammad Shiyabuddeen (Shiyab)' },
      { type: 'text',  text: '  Full-Stack Developer & Data Engineering Intern' },
      { type: 'text',  text: '  Stellapps Technologies — Bengaluru, Karnataka' },
      { type: 'spacer' },
      { type: 'muted', text: '  🎓 B.E. Computer Science — NMAM Institute of Technology' },
      { type: 'muted', text: '  🏆 Double First Prize — Srinathon 2025 (100+ teams)' },
      { type: 'muted', text: '  🌐 Selected — Unfold 2024 (Asia\'s largest Web3 hackathon)' },
      { type: 'spacer' },
    ],
  },

  'skills --level=production': {
    desc: 'Production-ready skills',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ PRODUCTION-GRADE SKILLS ]' },
      { type: 'spacer' },
      { type: 'skill', category: 'Backend',     items: ['Node.js', 'Express', 'FastAPI', 'PostgreSQL', 'Firebase'] },
      { type: 'skill', category: 'Frontend',    items: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
      { type: 'skill', category: 'Data Eng.',   items: ['Pentaho PDI', 'SQL Optimization', 'ETL Pipelines', 'Cron Jobs'] },
      { type: 'skill', category: 'DevOps',      items: ['Linux', 'Git', 'Vercel', 'Docker (basics)', 'CI/CD'] },
      { type: 'spacer' },
      { type: 'muted', text: '  → Run skills --level=all for every tool in the stack' },
      { type: 'spacer' },
    ],
  },

  'skills --level=all': {
    desc: 'All skills',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ FULL TECHNICAL ARSENAL ]' },
      { type: 'spacer' },
      { type: 'skill', category: 'Languages',   items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C++', 'Solidity'] },
      { type: 'skill', category: 'Frontend',    items: ['React 18', 'Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Three.js', 'WebRTC'] },
      { type: 'skill', category: 'Backend',     items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'WebSockets', 'Firebase'] },
      { type: 'skill', category: 'Databases',   items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
      { type: 'skill', category: 'Data Eng.',   items: ['Pentaho PDI', 'ETL Workflows', 'SQL Optimization', 'EXPLAIN ANALYZE', 'Linux Cron'] },
      { type: 'skill', category: 'AI / ML',     items: ['Gemini API', 'OpenAI', 'LangChain', 'TensorFlow basics'] },
      { type: 'skill', category: 'Web3',        items: ['Solidity', 'Hardhat', 'Ethers.js', 'Smart Contracts', 'IPFS'] },
      { type: 'skill', category: 'Tools',       items: ['Git', 'Docker', 'Vercel', 'GitHub Actions', 'Figma', 'Postman'] },
      { type: 'spacer' },
    ],
  },

  'cat stellapps_internship.log': {
    desc: 'Internship experience',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ stellapps_internship.log ]' },
      { type: 'spacer' },
      { type: 'accent', text: '  ROLE:     Data Engineering Intern' },
      { type: 'text',  text: '  COMPANY:  Stellapps Technologies (Bengaluru)' },
      { type: 'text',  text: '  PERIOD:   Oct 2026 — Present  🔴 ACTIVE' },
      { type: 'spacer' },
      { type: 'text',  text: '  TASKS:' },
      { type: 'muted', text: '    ✓ Automated PostgreSQL batch ingestion (12,450 records/batch)' },
      { type: 'muted', text: '    ✓ Built Pentaho PDI ETL transformation workflows' },
      { type: 'muted', text: '    ✓ Wrote EXPLAIN ANALYZE SQL optimizations (40% faster queries)' },
      { type: 'muted', text: '    ✓ Configured Linux cron jobs for automated reporting' },
      { type: 'muted', text: '    ✓ Maintained dairy-tech data pipeline at scale' },
      { type: 'spacer' },
      { type: 'muted', text: '  STACK: PostgreSQL · Pentaho PDI · Linux · SQL · Python' },
      { type: 'spacer' },
    ],
  },

  'cat healix.log': {
    desc: 'Healix project',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ healix.log — AUTOMATED HEALTH MANAGEMENT SYSTEM ]' },
      { type: 'spacer' },
      { type: 'accent', text: '  STATUS:   🟢 Live in Production' },
      { type: 'text',  text: '  TYPE:     AI-Powered Telemedicine Platform' },
      { type: 'text',  text: '  PITCH:    K-Tech Startup Incubation Centre (Mangalore)' },
      { type: 'spacer' },
      { type: 'text',  text: '  FEATURES:' },
      { type: 'muted', text: '    ✓ WebRTC peer-to-peer telemedicine video consultations' },
      { type: 'muted', text: '    ✓ AI voice symptom diagnostics (Gemini API)' },
      { type: 'muted', text: '    ✓ Encrypted PostgreSQL patient records & e-prescriptions' },
      { type: 'muted', text: '    ✓ Smart appointment scheduling + emergency alert bus' },
      { type: 'muted', text: '    ✓ Secure multi-role auth (Patient / Doctor / Admin)' },
      { type: 'spacer' },
      { type: 'muted', text: '  STACK: React · Node.js · PostgreSQL · WebRTC · Gemini API' },
      { type: 'spacer' },
      { type: 'accent', text: '  RECOGNITION: Positive investor validation @ K-Tech Incubation' },
      { type: 'spacer' },
    ],
  },

  'git log --oneline': {
    desc: 'Recent commits',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ git log --oneline — github.com/mohdshiyab ]' },
      { type: 'spacer' },
      { type: 'commit', hash: 'e0f8a1c', msg: 'feat: Command Palette, Recruiter Modal, Web Audio FX', date: '2h ago' },
      { type: 'commit', hash: '4d71c79', msg: 'fix(chatbot): intelligent conversational parsing', date: '19h ago' },
      { type: 'commit', hash: 'abc419f', msg: 'fix(ai): increase timeout, add fallback model', date: '19h ago' },
      { type: 'commit', hash: 'ef0b87d', msg: 'fix(chatbot): isolate scroll with data-lenis-prevent', date: '19h ago' },
      { type: 'commit', hash: '4beb33d', msg: 'feat(ui): Lusion-inspired cursor, noise overlay, masked typography', date: '1d ago' },
      { type: 'commit', hash: '8f97fe7', msg: 'feat: Lenis smooth momentum scrolling & spring tilt physics', date: '1d ago' },
      { type: 'spacer' },
      { type: 'muted', text: '  → github.com/mohdshiyab for full history' },
      { type: 'spacer' },
    ],
  },

  'contact --info': {
    desc: 'Contact details',
    output: () => [
      { type: 'spacer' },
      { type: 'label', text: '[ CONTACT MATRIX ]' },
      { type: 'spacer' },
      { type: 'accent', text: '  EMAIL:    shihabputtur2@gmail.com' },
      { type: 'text',  text: '  GITHUB:   github.com/mohdshiyab' },
      { type: 'text',  text: '  LINKEDIN: linkedin.com/in/mohammad-shiyabuddeen-4b183724b/' },
      { type: 'text',  text: '  LOCATION: Mangalore / Bengaluru, Karnataka, India' },
      { type: 'spacer' },
      { type: 'muted', text: '  Open to: Full-time roles, Freelance, Internships, Collaborations' },
      { type: 'spacer' },
    ],
  },

  'sudo hire-shiyab': {
    desc: 'The most important command',
    output: () => 'HIRE',
  },

  clear: {
    desc: 'Clear terminal',
    output: () => 'CLEAR',
  },
};

// ─── Helpers ───────────────────────────────────────────────────────────────
const PROMPT = 'shiyab@portfolio:~$';

function LineRenderer({ line }) {
  if (line.type === 'spacer') return <div className="h-1" />;
  if (line.type === 'cmd') return (
    <div className="flex gap-3 text-xs font-mono py-0.5">
      <span className="text-[#FF2A2A] min-w-[220px]">{line.label}</span>
      <span className="text-gray-500">— {line.desc}</span>
    </div>
  );
  if (line.type === 'skill') return (
    <div className="flex gap-3 text-xs font-mono py-0.5">
      <span className="text-cyan-400 min-w-[90px]">{line.category}</span>
      <span className="text-gray-300">{line.items.join('  ·  ')}</span>
    </div>
  );
  if (line.type === 'commit') return (
    <div className="flex gap-3 text-xs font-mono py-0.5">
      <span className="text-yellow-500">{line.hash}</span>
      <span className="text-gray-300 flex-1">{line.msg}</span>
      <span className="text-gray-600">{line.date}</span>
    </div>
  );
  if (line.type === 'label')  return <div className="text-xs font-mono font-bold text-[#FF2A2A] py-0.5">{line.text}</div>;
  if (line.type === 'accent') return <div className="text-xs font-mono text-emerald-400 py-0.5">{line.text}</div>;
  if (line.type === 'muted')  return <div className="text-xs font-mono text-gray-500 py-0.5">{line.text}</div>;
  if (line.type === 'info')   return <div className="text-xs font-mono text-cyan-400 py-0.5">{line.text}</div>;
  return <div className="text-xs font-mono text-gray-300 py-0.5">{line.text}</div>;
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function HackerTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'SHIYAB OS v2.0 — Hacker Terminal Interface' },
    { type: 'system', text: 'Type "help" to list all commands.' },
    { type: 'spacer' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const fireHireConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ['#FF2A2A', '#ff6b6b', '#fff', '#ff4444'];
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const executeCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Add to history list
    setCmdHistory(prev => [cmd, ...prev]);
    setCmdIndex(-1);

    // Echo command
    const echoLine = { type: 'echo', text: `${PROMPT} ${raw}` };

    if (cmd === 'clear') {
      setHistory([
        { type: 'system', text: 'SHIYAB OS v2.0 — Terminal cleared.' },
        { type: 'spacer' },
      ]);
      return;
    }

    const def = COMMANDS[cmd];
    if (!def) {
      setHistory(prev => [
        ...prev,
        echoLine,
        { type: 'error', text: `  command not found: ${cmd}. Try "help"` },
        { type: 'spacer' },
      ]);
      return;
    }

    const result = def.output();

    if (result === 'HIRE') {
      fireHireConfetti();
      setHistory(prev => [
        ...prev,
        echoLine,
        { type: 'spacer' },
        { type: 'accent', text: '  ██╗  ██╗██╗██████╗ ███████╗    ███████╗██╗  ██╗██╗██╗   ██╗ █████╗ ██████╗ ██╗' },
        { type: 'accent', text: '  ██║  ██║██║██╔══██╗██╔════╝    ██╔════╝██║  ██║██║╚██╗ ██╔╝██╔══██╗██╔══██╗██║' },
        { type: 'accent', text: '  ███████║██║██████╔╝█████╗      ███████╗███████║██║ ╚████╔╝ ███████║██████╔╝██║' },
        { type: 'accent', text: '  ██╔══██║██║██╔══██╗██╔══╝      ╚════██║██╔══██║██║  ╚██╔╝  ██╔══██║██╔══██╗╚═╝' },
        { type: 'accent', text: '  ██║  ██║██║██║  ██║███████╗    ███████║██║  ██║██║   ██║   ██║  ██║██████╔╝██╗' },
        { type: 'accent', text: '  ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═════╝ ╚═╝' },
        { type: 'spacer' },
        { type: 'label', text: '  🎉 sudo hire-shiyab: Authentication successful!' },
        { type: 'accent', text: '  → Email:    shihabputtur2@gmail.com' },
        { type: 'accent', text: '  → LinkedIn: linkedin.com/in/mohammad-shiyabuddeen-4b183724b/' },
        { type: 'spacer' },
        { type: 'muted', text: '  "The best engineers don\'t just write code — they architect solutions."' },
        { type: 'spacer' },
      ]);
      return;
    }

    setHistory(prev => [...prev, echoLine, ...result]);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(next === -1 ? '' : (cmdHistory[next] ?? ''));
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Autocomplete
      const match = Object.keys(COMMANDS).find(k => k.startsWith(input.toLowerCase()) && k !== input.toLowerCase());
      if (match) setInput(match);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="terminal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          />

          {/* Terminal Window */}
          <motion.div
            key="terminal-window"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            data-lenis-prevent
            className="fixed inset-x-4 top-[8vh] bottom-[8vh] z-[201] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,42,42,0.15)] flex flex-col"
            style={{ background: 'rgba(5,5,5,0.97)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 shrink-0">
              <div className="flex items-center gap-3">
                {/* Traffic lights */}
                <div className="flex gap-2">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <Terminal className="w-3.5 h-3.5 text-[#FF2A2A]" />
                  <span>shiyab@portfolio:~</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gray-600 hidden sm:inline">Press ~ or ESC to close</span>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 overflow-y-auto px-4 py-4 font-mono text-xs"
              data-lenis-prevent
              onWheel={e => e.stopPropagation()}
            >
              {/* Boot header */}
              <div className="text-[#FF2A2A] text-xs font-mono mb-4 opacity-60">
                ┌─────────────────────────────────────────────────────────────────────┐<br />
                │  SHIYAB OS v2.0  ·  Powered by Crimson Intelligence  ·  🔴 ACTIVE  │<br />
                └─────────────────────────────────────────────────────────────────────┘
              </div>

              {/* History */}
              {history.map((line, i) => {
                if (line.type === 'spacer') return <div key={i} className="h-1" />;
                if (line.type === 'echo')   return (
                  <div key={i} className="text-xs font-mono text-[#FF2A2A]/80 py-0.5">{line.text}</div>
                );
                if (line.type === 'error')  return (
                  <div key={i} className="text-xs font-mono text-red-400 py-0.5">{line.text}</div>
                );
                if (line.type === 'system') return (
                  <div key={i} className="text-xs font-mono text-cyan-400/70 py-0.5">{line.text}</div>
                );
                return <LineRenderer key={i} line={line} />;
              })}

              <div ref={bottomRef} />
            </div>

            {/* Input Row */}
            <div className="border-t border-white/10 bg-black/40 px-4 py-3 flex items-center gap-3 shrink-0">
              <span className="text-[#FF2A2A] font-mono text-xs whitespace-nowrap">{PROMPT}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command… (Tab to autocomplete)"
                className="flex-1 bg-transparent font-mono text-xs text-gray-200 placeholder-gray-700 outline-none caret-[#FF2A2A]"
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
              <span className="text-gray-700 font-mono text-xs hidden sm:inline">↑↓ history · Tab autocomplete</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
