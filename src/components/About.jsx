import React from 'react';
import { motion } from 'motion/react';
import { Download, ArrowRight, Quote } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#050505] flex items-center overflow-hidden border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Engineering Principles & Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Architecting Scalable <span className="text-[#FF2A2A]">Web & AI Systems</span>
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-2xl">
            Passionate full-stack developer committed to craft, performance, and user-first digital products.
          </p>
        </motion.div>

        {/* Main Grid: Left Philosophy & Quote Card, Right Story & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Engineering Philosophy & Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-[#0c0c0c] p-7 sm:p-8 space-y-6 shadow-2xl overflow-hidden hover:border-[#FF2A2A]/40 transition-colors duration-500">
              {/* Soft ambient background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF2A2A]/10 rounded-full blur-3xl pointer-events-none -z-0" />
              
              <div className="w-12 h-12 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 flex items-center justify-center text-[#FF2A2A]">
                <Quote className="w-6 h-6" />
              </div>

              <blockquote className="relative z-10 space-y-3">
                <p className="font-script text-2xl sm:text-3xl text-white tracking-wide leading-snug">
                  "{ABOUT_DATA.quote}"
                </p>
                <div className="pt-2">
                  <span className="text-xs font-mono text-[#FF2A2A] font-semibold tracking-wider uppercase block">
                    — Mohammad Shiyabuddeen
                  </span>
                  <span className="text-[11px] font-mono text-gray-400 block mt-0.5">
                    Full Stack Developer & Data Engineer
                  </span>
                </div>
              </blockquote>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-[11px] font-mono text-gray-400 uppercase tracking-widest font-semibold">
                  Engineering Principles
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Clean Architecture',
                    'Production Data Pipelines',
                    'Micro-Performance',
                    'Fault Tolerance',
                    'User-Centric Design',
                  ].map((val) => (
                    <span
                      key={val}
                      className="px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-[11px] font-mono text-gray-300 hover:border-[#FF2A2A]/40 hover:text-white transition-colors cursor-default"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF2A2A]/15 to-transparent rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right Column: Bio Narrative, Proven Impact, Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {ABOUT_DATA.story.map((paragraph, idx) => (
                <p key={idx} className="tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metric Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ABOUT_DATA.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-xl border border-white/10 bg-[#0c0c0c] space-y-1 hover:border-[#FF2A2A]/50 hover:shadow-[0_0_20px_rgba(255,42,42,0.15)] transition-all group cursor-default"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#FF2A2A] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-gray-400 font-light leading-tight">
                    {metric.context}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/15 shadow-sm transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#FF2A2A]" />
                <span>Download Official Resume</span>
              </motion.a>
              <motion.a
                whileHover={{ x: 4 }}
                href="#projects"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-gray-300 hover:text-[#FF2A2A] transition-colors font-medium"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
