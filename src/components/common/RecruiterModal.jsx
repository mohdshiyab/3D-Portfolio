import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Mail, 
  Linkedin, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Award, 
  Database, 
  Zap, 
  GraduationCap, 
  ExternalLink 
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { playClick, playSuccess, playPop } from '../../utils/soundEffects';

export default function RecruiterModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      playPop();
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    playSuccess();
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        onClick={onClose}
        className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full rounded-3xl border border-black/10 dark:border-white/15 bg-white dark:bg-[#0c0c0c] shadow-2xl p-6 sm:p-8 space-y-6 text-gray-900 dark:text-white my-auto overflow-hidden"
        >
          {/* Subtle Top Crimson Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-[#FF2A2A]/15 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Top Bar with Badge & Close */}
          <div className="flex items-center justify-between pb-2 border-b border-black/5 dark:border-white/10 relative z-10">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-[#FF2A2A] text-xs font-mono font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>30-Second Recruiter Fast-Track</span>
              </span>
              <span className="text-[11px] font-mono text-gray-400 hidden sm:inline">[ EXECUTIVE SUMMARY ]</span>
            </div>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="p-2 rounded-full border border-black/10 dark:border-white/10 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close executive summary"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Candidate Profile Snapshot */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-950 dark:text-white">
                Mohammad Shiyabuddeen
              </h3>
              <p className="text-sm font-mono text-[#FF2A2A] font-semibold">
                Full-Stack Developer & Data Engineering Intern · Bengaluru / Mangalore, India
              </p>
            </div>

            {/* Availability Beacon */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-mono font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-ping" />
              <span>Relocation & Remote Ready</span>
            </div>
          </div>

          {/* 4 Core Value Pillars (Why Hire Shiyab) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
            {/* Pillar 1: Data Engineering */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02] space-y-1.5 hover:border-[#FF2A2A]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#FF2A2A]">
                <Database className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Data Engineering at Scale</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                Hands-on at <strong>Stellapps Technologies</strong> managing PostgreSQL Linux clusters, writing high-performance SQL, running Pentaho PDI ETL workflows, and cron database automation.
              </p>
            </div>

            {/* Pillar 2: Proven Impact */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02] space-y-1.5 hover:border-[#FF2A2A]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#FF2A2A]">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">+25% Frontend Performance</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                Shipped production MERN features at <strong>SuprMentr</strong> with audited 25% performance boosts; built real-time WebRTC communications and AI diagnostics.
              </p>
            </div>

            {/* Pillar 3: Competitive Excellence */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02] space-y-1.5 hover:border-[#FF2A2A]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#FF2A2A]">
                <Award className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Double First Prize Winner</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                Co-led the winning team at <strong>Srinathon 2025</strong> out of 100+ teams, winning both sponsored tracks with fully functional prototypes and live demonstrations.
              </p>
            </div>

            {/* Pillar 4: Solid Foundation */}
            <div className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-white/[0.02] space-y-1.5 hover:border-[#FF2A2A]/40 transition-colors">
              <div className="flex items-center space-x-2 text-[#FF2A2A]">
                <GraduationCap className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">B.E. Computer Science</span>
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                4-year degree (2022–2026) at <strong>Yenepoya Institute of Technology (VTU)</strong>. Strong grounding in algorithms, relational schemas, distributed systems, and modern web frameworks.
              </p>
            </div>
          </div>

          {/* Key Tech Stack Pills */}
          <div className="space-y-2 relative z-10">
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider font-semibold">
              Primary Stack & Production Proficiencies:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                'PostgreSQL',
                'React.js',
                'Next.js',
                'Node.js',
                'Python',
                'Pentaho PDI (ETL)',
                'Linux & Shell',
                'WebRTC',
                'Gemini AI API',
                'Tailwind CSS',
                'Docker',
                'Git & GitHub'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-gray-800 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Strip */}
          <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.05] hover:border-[#FF2A2A] text-xs font-mono font-semibold transition-all cursor-pointer"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="p-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.05] hover:text-[#FF2A2A] hover:border-[#FF2A2A] transition-all cursor-pointer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Direct Mail */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => playClick()}
                className="p-2.5 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.05] hover:text-[#FF2A2A] hover:border-[#FF2A2A] transition-all cursor-pointer"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Primary Download Resume CTA */}
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-[#FF2A2A] hover:bg-[#e02424] text-white text-xs font-semibold shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Résumé (PDF)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
