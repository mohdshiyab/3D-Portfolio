import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Brain, Database, Cloud, Palette, Code2, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA, ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Brain: Brain,
  Database: Database,
  Cloud: Cloud,
  Palette: Palette,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="skills" className="relative py-20 sm:py-24 bg-[#050505] flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Capabilities & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-[#FF2A2A]">Proficiencies</span>
          </h2>
          <p className="text-sm text-gray-400 font-light px-2">
            Engineered with modern frameworks, reliable database patterns, real-time communications, and production AI pipelines.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Main Layout: Portrait + Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left: Sticky Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] lg:max-w-none group">
              {/* Ambient glow */}
              <div className="absolute -inset-3 bg-gradient-to-b from-[#FF2A2A]/25 via-[#FF2A2A]/5 to-transparent rounded-[2rem] blur-2xl -z-10 group-hover:from-[#FF2A2A]/40 transition-colors duration-500" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[3/4] rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#0e0e0e] to-[#050505] overflow-hidden shadow-2xl"
              >
                <div
                  className="absolute inset-0 opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                <img
                  src={ABOUT_DATA.skillsPhoto}
                  alt="Mohammad Shiyabuddeen focused on solving a technical problem"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

                <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border-white/15 shadow-xl">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-semibold text-white tracking-wide truncate">Always Learning, Always Building</span>
                </div>
              </motion.div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2ecc71]/30 bg-[#2ecc71]/[0.06]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ecc71] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ecc71]" />
                  </span>
                  <span className="text-xs font-medium text-gray-200">{PERSONAL_INFO.status}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.availability.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-[11px] text-gray-300 font-mono hover:border-[#FF2A2A]/40 transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#FF2A2A]" />
                      {item}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/15 text-white text-xs sm:text-sm font-semibold hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300"
                >
                  <Mail className="w-4 h-4 text-[#FF2A2A]" />
                  <span>Let's Talk About Your Project</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid with Staggered Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-6 lg:pt-0"
          >
            {SKILLS_DATA.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] hover:border-[#FF2A2A]/50 transition-all duration-300 flex flex-col justify-between space-y-5 group hover:shadow-[0_12px_35px_-10px_rgba(255,42,42,0.2)] cursor-default"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 rounded-xl border border-white/10 bg-white/5 text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A]/15 transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                      {cat.category}
                    </h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs text-gray-300 font-mono hover:border-[#FF2A2A]/40 hover:text-white hover:bg-[#FF2A2A]/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
