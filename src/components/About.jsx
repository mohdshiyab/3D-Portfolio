import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Quote, Globe, Trophy, Sparkles, CheckCircle2, MapPin, Clock, Github, Linkedin, ExternalLink } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import TiltCard from './common/TiltCard';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white flex items-center overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header with Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Principles & Bento Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Architecting Scalable <span className="text-[#FF2A2A]">Web & AI Systems</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light max-w-2xl">
            Passionate full-stack developer committed to craft, performance, and user-first digital products.
          </p>
        </motion.div>

        {/* Modern Bento Grid (12-Column Responsive Matrix) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* ========================================================= */}
          {/* BENTO CELL 1: Philosophy & Core Beliefs (7 Cols)           */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-12 lg:col-span-7 flex"
          >
            <TiltCard
              maxTilt={6}
              scale={1.015}
              glare={true}
              glareOpacity={0.12}
              className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg dark:shadow-2xl overflow-hidden hover:border-[#FF2A2A]/40 transition-colors group"
            >
              {/* Subtle crimson radial backdrop */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2A2A]/10 rounded-full blur-3xl pointer-events-none -z-0" />

              <div className="relative z-10 space-y-5" style={{ transform: 'translateZ(15px)' }}>
                {/* Header with icon & badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 flex items-center justify-center text-[#FF2A2A] shadow-sm">
                    <Quote className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400">
                    Core Philosophy
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="space-y-3">
                  <p className="font-script text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-wide leading-snug group-hover:text-[#FF2A2A] transition-colors">
                    "{ABOUT_DATA.quote}"
                  </p>
                  <div className="pt-1">
                    <span className="text-xs font-mono text-[#FF2A2A] font-semibold tracking-wider uppercase block">
                      — Mohammad Shiyabuddeen
                    </span>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 block mt-0.5">
                      Full Stack Developer & Data Engineer
                    </span>
                  </div>
                </blockquote>
              </div>

              {/* Engineering Principles Chips */}
              <div className="relative z-10 pt-4 border-t border-black/10 dark:border-white/10 space-y-3" style={{ transform: 'translateZ(20px)' }}>
                <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold flex items-center justify-between">
                  <span>Architectural Principles</span>
                  <span className="text-[10px] text-[#FF2A2A]">Interactive</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Clean Architecture',
                    'Production Data Pipelines',
                    'Micro-Performance',
                    'Fault Tolerance',
                    'User-Centric Design',
                  ].map((val) => (
                    <motion.span
                      key={val}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.04] text-xs font-mono text-gray-700 dark:text-gray-300 hover:border-[#FF2A2A]/50 hover:bg-[#FF2A2A]/10 hover:text-[#FF2A2A] dark:hover:text-white transition-all cursor-default shadow-sm"
                    >
                      {val}
                    </motion.span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================= */}
          {/* BENTO CELL 2: Global Reach & Live Radar (5 Cols)          */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="md:col-span-12 lg:col-span-5 flex"
          >
            <TiltCard
              maxTilt={8}
              scale={1.015}
              glare={true}
              glareOpacity={0.15}
              className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg dark:shadow-2xl overflow-hidden hover:border-[#FF2A2A]/40 transition-colors group"
            >
              <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
                {/* Status Ping */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2ecc71]/40 bg-[#2ecc71]/10 text-[#2ecc71] text-xs font-mono font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ecc71] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ecc71]" />
                    </span>
                    <span>{PERSONAL_INFO.status}</span>
                  </div>
                  <Globe className="w-5 h-5 text-gray-400 group-hover:text-[#FF2A2A] transition-colors" />
                </div>

                {/* Location & Timezone Details */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2 text-gray-900 dark:text-white font-bold text-lg">
                    <MapPin className="w-5 h-5 text-[#FF2A2A] shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 dark:text-gray-400 pl-7">
                    <Clock className="w-3.5 h-3.5" />
                    <span>India Standard Time (UTC +5:30)</span>
                  </div>
                </div>
              </div>

              {/* Availability Mode Badges */}
              <div className="space-y-3 pt-3 border-t border-black/10 dark:border-white/10" style={{ transform: 'translateZ(20px)' }}>
                <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold block">
                  Engagement Modes
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {PERSONAL_INFO.availability.map((item) => (
                    <div
                      key={item}
                      className="flex items-center space-x-2 px-3 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] text-xs font-mono text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================= */}
          {/* BENTO CELL 3: Proven Impact & Track Record (4 Cols)        */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
            className="md:col-span-12 lg:col-span-4 flex"
          >
            <TiltCard
              maxTilt={8}
              scale={1.015}
              glare={true}
              glareOpacity={0.14}
              className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-[#0c0c0c] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-lg dark:shadow-2xl overflow-hidden hover:border-[#FF2A2A]/40 transition-colors group"
            >
              <div className="flex items-center justify-between" style={{ transform: 'translateZ(15px)' }}>
                <div className="w-10 h-10 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 flex items-center justify-center text-[#FF2A2A]">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400">
                  Key Metrics
                </span>
              </div>

              {/* 3 Metrics Stacks */}
              <div className="space-y-4 my-auto py-2" style={{ transform: 'translateZ(20px)' }}>
                {ABOUT_DATA.metrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="p-3.5 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-0.5 group/m hover:border-[#FF2A2A]/40 transition-all shadow-sm"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white group-hover/m:text-[#FF2A2A] transition-colors">
                        {metric.value}
                      </span>
                      <span className="text-[10px] font-mono text-[#FF2A2A] uppercase font-semibold">
                        Verified
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                      {metric.label}
                    </div>
                    <div className="text-[11px] text-gray-500 dark:text-gray-400 font-light leading-snug">
                      {metric.context}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================= */}
          {/* BENTO CELL 4: Engineering Journey & Fast Actions (8 Cols)  */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
            className="md:col-span-12 lg:col-span-8 flex"
          >
            <TiltCard
              maxTilt={6}
              scale={1.015}
              glare={true}
              glareOpacity={0.12}
              className="w-full rounded-3xl border border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg dark:shadow-2xl overflow-hidden hover:border-[#FF2A2A]/40 transition-colors group"
            >
              <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF2A2A] flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
                    <span>Engineering Background</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    B.E. Computer Science
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {ABOUT_DATA.story.map((paragraph, idx) => (
                    <p key={idx} className="tracking-wide">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Socials */}
              <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4" style={{ transform: 'translateZ(20px)' }}>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = PERSONAL_INFO.resumeUrl;
                      link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold hover:bg-[#e02020] shadow-[0_0_20px_rgba(255,42,42,0.35)] transition-all duration-300"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Download Official Resume</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 4 }}
                    href="#projects"
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:text-[#FF2A2A] dark:hover:text-[#FF2A2A] transition-colors font-semibold px-2 py-1"
                  >
                    <span>Explore Featured Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>

                {/* Social Quick-Links */}
                <div className="flex items-center space-x-2">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-[#FF2A2A] hover:border-[#FF2A2A]/40 transition-colors shadow-sm"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-[#FF2A2A] hover:border-[#FF2A2A]/40 transition-colors shadow-sm"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
