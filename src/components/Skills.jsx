import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Brain, Database, Cloud, Palette, Code2, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA, ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';
import TiltCard from './common/TiltCard';

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
    <section id="skills" className="relative py-20 sm:py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white flex flex-col justify-center overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          SKILLS
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Technical <span className="text-[#FF2A2A]">Proficiencies</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light px-2">
            Engineered with modern frameworks, reliable database patterns, real-time communications, and production AI pipelines.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Main Layout: Portrait + Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

          {/* Left: Sticky Portrait Card with 3D Tilt */}
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

              <TiltCard
                maxTilt={8}
                scale={1.02}
                glare={true}
                glareOpacity={0.16}
                className="relative aspect-[3/4] rounded-[1.75rem] border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-gradient-to-b dark:from-[#0e0e0e] dark:to-[#050505] overflow-hidden shadow-2xl"
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
                  style={{ transform: 'translateZ(10px)' }}
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                <div
                  className="absolute inset-x-4 bottom-4 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/75 dark:glass-panel border border-white/20 shadow-xl backdrop-blur-md"
                  style={{ transform: 'translateZ(25px)' }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-mono font-semibold text-white tracking-wide truncate">Always Learning, Always Building</span>
                </div>
              </TiltCard>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#2ecc71]/30 bg-[#2ecc71]/[0.06]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2ecc71] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2ecc71]" />
                  </span>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200">{PERSONAL_INFO.status}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {PERSONAL_INFO.availability.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.02] text-[11px] text-gray-700 dark:text-gray-300 font-mono hover:border-[#FF2A2A]/40 transition-colors cursor-default shadow-xs"
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
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-black/10 dark:border-white/15 text-gray-900 dark:text-white text-xs sm:text-sm font-semibold hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#FF2A2A]" />
                  <span>Let's Talk About Your Project</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid with 3D Tilt Cards & Staggered Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 pt-6 lg:pt-0 items-stretch"
          >
            {SKILLS_DATA.map((cat, idx) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  className="flex"
                >
                  <TiltCard
                    maxTilt={6}
                    scale={1.015}
                    glare={true}
                    glareOpacity={0.12}
                    className="w-full p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0c0c0c] hover:border-[#FF2A2A]/50 transition-colors duration-300 flex flex-col justify-between space-y-5 group shadow-md dark:shadow-xl cursor-default"
                  >
                    <div className="flex items-center space-x-3.5" style={{ transform: 'translateZ(14px)' }}>
                      <div className="p-3 rounded-xl border border-black/5 dark:border-white/10 bg-[#FF2A2A]/10 text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A]/20 transition-all duration-300 shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white group-hover:text-[#FF2A2A] transition-colors">
                        {cat.category}
                      </h3>
                    </div>

                    {/* Skill Badges with Micro-Interactions */}
                    <div className="flex flex-wrap gap-2 pt-2" style={{ transform: 'translateZ(20px)' }}>
                      {cat.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          whileHover={{ scale: 1.06, y: -2 }}
                          className="px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] text-xs text-gray-700 dark:text-gray-300 font-mono hover:border-[#FF2A2A]/50 hover:text-[#FF2A2A] dark:hover:text-white hover:bg-[#FF2A2A]/10 transition-all duration-200 cursor-default shadow-xs"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
