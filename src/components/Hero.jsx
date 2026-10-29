import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Instagram, Trophy, Code2, MapPin } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen w-full bg-white dark:bg-[#050505] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-6 transition-colors duration-300"
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40 dark:opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(120, 120, 130, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 120, 130, 0.08) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Atmospheric Crimson Radial Glow */}
      <div
        className="absolute top-[22%] sm:top-[25%] right-[10%] w-[550px] md:w-[850px] h-[450px] md:h-[620px] pointer-events-none z-0 opacity-40 dark:opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(229, 32, 32, 0.22) 0%, rgba(160, 16, 16, 0.08) 45%, transparent 75%)',
          filter: 'blur(55px)',
        }}
      />

      {/* Background Name Watermark "SHIYAB" */}
      <div className="absolute top-[16%] sm:top-[18%] left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 select-none pointer-events-none z-0 overflow-hidden text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display font-black text-black/[0.04] dark:text-white/[0.035] text-[clamp(4.5rem,14vw,13.5rem)] tracking-wider leading-none select-none block"
        >
          SHIYAB
        </motion.span>
      </div>

      {/* Main Foreground 2-Column Content (Z-20) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex-1 flex items-center py-6 sm:py-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN (lg:col-span-7): Status, Headline, Bio, CTAs, Social, Metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Live Status Pill & Location */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ecc71]" />
                </span>
                <span className="text-[11px] font-mono uppercase font-semibold tracking-wider text-gray-800 dark:text-gray-200">
                  {PERSONAL_INFO.status}
                </span>
                <span className="text-gray-400">·</span>
                <span className="text-[11px] font-mono text-gray-600 dark:text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FF2A2A]" />
                  <span>Mangalore, India</span>
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[54px] xl:text-[62px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.08]">
                {HERO_DATA.headline.line1}
              </h1>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[54px] xl:text-[62px] font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.08]">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] relative inline-block drop-shadow-[0_0_25px_rgba(255,42,42,0.45)]">
                  {HERO_DATA.headline.line2Highlight}
                </span>
              </h1>
            </motion.div>

            {/* Bio Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed max-w-xl"
            >
              {HERO_DATA.bio}
            </motion.p>

            {/* Primary & Secondary Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.45)] hover:shadow-[0_0_40px_rgba(255,42,42,0.8)] hover:bg-[#ff3b3b] transition-all duration-300 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-black/[0.03] dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/20 text-gray-900 dark:text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-pointer shadow-sm dark:shadow-none"
              >
                <Mail className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {[
                  { href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, label: 'LinkedIn Profile' },
                  { href: PERSONAL_INFO.socials.github, icon: Github, label: 'GitHub Profile' },
                  { href: PERSONAL_INFO.socials.instagram, icon: Instagram, label: 'Instagram Profile' },
                  { href: `mailto:${PERSONAL_INFO.email}`, icon: Mail, label: 'Send Email' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-[#0c0c0c] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] transition-all shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
              <div className="h-4 w-px bg-black/10 dark:bg-white/15 hidden sm:block" />
              <span className="text-[11px] text-gray-500 dark:text-gray-400 font-light hidden sm:inline-block">
                {HERO_DATA.taglinePrompt}
              </span>
            </motion.div>

            {/* Metrics Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 pt-4 border-t border-black/10 dark:border-white/10 max-w-lg"
            >
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-display font-black text-2xl sm:text-3xl text-gray-950 dark:text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (lg:col-span-5): Beautifully Framed Hero Portrait Stage Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[400px] lg:max-w-[430px]">
              
              {/* Soft Ambient Backlight Halo behind Stage Card */}
              <div className="absolute -inset-4 bg-gradient-to-b from-[#FF2A2A]/20 via-[#FF2A2A]/5 to-transparent rounded-[3rem] blur-2xl -z-10 group-hover:from-[#FF2A2A]/35 transition-colors duration-700 pointer-events-none" />

              {/* Framed Stage Container with Clean Overflow Hidden & Rounded Border */}
              <motion.div
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] w-full rounded-[2.5rem] border border-black/10 dark:border-white/15 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-[#161619] dark:via-[#0c0c0e] dark:to-[#050507] shadow-xl dark:shadow-2xl overflow-hidden group select-none"
              >
                {/* Subtle Inner Stage Lighting */}
                <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-black/10 dark:to-black/60 pointer-events-none z-10" />

                {/* Top-Left Cursive Motto Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white/90 dark:bg-black/70 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-md">
                  <span className="font-script text-xs sm:text-sm text-gray-900 dark:text-white/95 font-bold">
                    Build · Learn · Create
                  </span>
                </div>

                {/* Top-Right Double First Prize Pill */}
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#FF2A2A] text-white shadow-[0_0_15px_rgba(255,42,42,0.5)] flex items-center space-x-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono font-bold tracking-wide uppercase">2x Winner</span>
                </div>

                {/* High-Resolution Portrait Cutout */}
                <img
                  src={HERO_DATA.portrait}
                  alt={PERSONAL_INFO.name}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                />

                {/* Bottom Overlay Focus Badge */}
                <div className="absolute inset-x-4 bottom-4 z-20 p-3.5 rounded-2xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-xl flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 flex items-center justify-center text-[#FF2A2A] shrink-0">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-gray-500 dark:text-gray-400 font-semibold leading-tight">Focus</div>
                      <div className="text-xs font-bold text-gray-950 dark:text-white leading-tight mt-0.5">Full Stack & AI Systems</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#2ecc71] font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ecc71] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ecc71]" />
                    </span>
                    <span className="hidden sm:inline">Active</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Row: Centered Scroll Down Indicator (Safely padded, zero collision) */}
      <div className="relative z-20 w-full flex items-center justify-center select-none pointer-events-auto pt-4 pb-2">
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="inline-flex flex-col items-center space-y-2 text-xs font-mono tracking-widest text-gray-500 hover:text-[#FF2A2A] dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-500 group-hover:text-[#FF2A2A] dark:text-gray-400 dark:group-hover:text-white transition-colors">
            Scroll Down
          </span>
          <div className="relative flex flex-col items-center justify-center h-6 w-2">
            <span className="w-px h-full bg-black/15 dark:bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
            <span className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-bounce-down" />
          </div>
        </button>
      </div>
    </section>
  );
}
