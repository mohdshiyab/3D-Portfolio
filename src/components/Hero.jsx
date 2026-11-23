import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import CountUp from './common/CountUp';
import MagneticButton from './common/MagneticButton';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-4"
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Atmospheric Crimson Radial Glow Behind Name & Portrait */}
      <div
        className="absolute top-[26%] sm:top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1250px] h-[450px] md:h-[620px] pointer-events-none z-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(229, 32, 32, 0.45) 0%, rgba(160, 16, 16, 0.2) 45%, rgba(5, 5, 5, 0) 75%)',
          filter: 'blur(45px)',
        }}
      />

      {/* Background name watermark: "SHIYAB" with dramatic 3D volumetric crimson styling */}
      <div className="hidden lg:block absolute top-[20%] sm:top-[22%] lg:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] px-8 sm:px-12 xl:px-16 select-none pointer-events-none z-0 opacity-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex items-center justify-between w-full tracking-wider"
        >
          {['S', 'H', 'I', 'Y', 'A', 'B'].map((letter, i) => (
            <span
              key={i}
              className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff3a3a] via-[#c81616] to-[#3a0606] text-[clamp(3rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(255,42,42,0.28)]"
            >
              {letter}
            </span>
          ))}
        </motion.div>
      </div>

      {/* CENTERED LARGE PORTRAIT (Separated outer CSS centering from inner Motion translation to prevent override) */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none items-end justify-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative flex items-end justify-center"
        >
          {/* Soft crimson backlight halo behind head */}
          <div className="absolute bottom-[44%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#FF2A2A]/25 blur-[90px] rounded-full -z-10" />

          <img
            src={HERO_DATA.portrait}
            alt={PERSONAL_INFO.name}
            className="h-[48vh] xs:h-[54vh] sm:h-[70vh] md:h-[82vh] lg:h-[82vh] xl:h-[86vh] max-h-[820px] w-auto object-contain select-none filter contrast-[1.03] brightness-[0.98] block transform origin-bottom scale-[1.02] xl:scale-[1.05]"
          />
        </motion.div>
      </div>

      {/* FOREGROUND CONTENT LAYER (Z-20): Left Bio/Actions & Right Stats */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 pb-4">
          
          {/* LEFT COLUMN: Role, Headline, Bio, Buttons, Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-md lg:max-w-[340px] xl:max-w-md w-full flex flex-col justify-center space-y-6 text-left"
          >
            {/* Roles */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
                {HERO_DATA.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span className="hover:text-[#FF2A2A] transition-colors">{role}</span>
                    {idx < HERO_DATA.roles.length - 1 && <span className="text-gray-600">/</span>}
                  </React.Fragment>
                ))}
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-0.5 bg-[#FF2A2A]/60 rounded-full"
              />
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                {HERO_DATA.headline.line1}
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] drop-shadow-[0_0_25px_rgba(255,42,42,0.75)]">
                  {HERO_DATA.headline.line2Highlight}
                </span>
              </h2>
            </motion.div>

            {/* Bio Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-gray-300/90 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
            >
              {HERO_DATA.bio}
            </motion.p>

            {/* CTAs */}
            {/* Call to Actions with Magnetic Physics */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
              <MagneticButton strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleScrollTo('projects')}
                  className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.5)] hover:shadow-[0_0_40px_rgba(255,42,42,0.85)] hover:bg-[#ff3b3b] transition-all duration-300 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </motion.button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleScrollTo('contact')}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-black/70 backdrop-blur-sm border border-white/25 text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-pointer"
                >
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-gray-300" />
                </motion.button>
              </MagneticButton>
            </motion.div>

            {/* Social Icons & Bottom Prompt */}
            <motion.div variants={itemVariants} className="pt-2 flex items-center space-x-4 pointer-events-auto">
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
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-lg border border-white/15 bg-black/80 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-colors shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
              <div className="h-4 w-px bg-white/15 hidden sm:block" />
              <span className="text-[11px] text-gray-400 font-light hidden sm:inline-block">
                {HERO_DATA.taglinePrompt}
              </span>
            </motion.div>
          </motion.div>

          {/* MOBILE/TABLET-ONLY PORTRAIT */}
          <div className="w-full flex justify-center lg:hidden pointer-events-none select-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-[#FF2A2A]/20 blur-[70px] rounded-full -z-10" />
              <img
                src={HERO_DATA.portraitMobile}
                alt={PERSONAL_INFO.name}
                className="h-[280px] xs:h-[320px] sm:h-[400px] w-auto object-contain filter contrast-[1.03] brightness-[0.98]"
              />
            </motion.div>
          </div>

          {/* RIGHT CLUSTER: Cursive Motto + Key Stats Column */}
          <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-center justify-between lg:justify-end gap-6 xl:gap-10">
            
            {/* Cursive Script Motto (Build Learn Create Repeat) */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex flex-col items-start leading-[1.08] select-none pointer-events-none rotate-[-3deg] text-left shrink-0 pr-2"
            >
              <div className="font-script text-2xl sm:text-3xl lg:text-[32px] text-white/95 font-bold inline-flex flex-col items-start drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                <span>Build</span>
                <span>Learn</span>
                <span>Create</span>
                <span className="relative">
                  Repeat
                  <svg className="w-16 h-2 mt-0.5 text-white/70" viewBox="0 0 60 8" fill="none">
                    <path d="M2 5 Q 30 1, 58 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </motion.div>

            {/* Key Stats with Underline Accents */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-3 xs:gap-4 w-full lg:flex lg:flex-col lg:w-auto lg:space-y-6 text-left lg:text-right shrink-0"
            >
              {HERO_DATA.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 2 }}
                  className="space-y-0.5 cursor-default group"
                >
                  <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#FF2A2A] tracking-tight drop-shadow-[0_0_15px_rgba(255,42,42,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.7)] transition-all">
                    <CountUp
                      to={stat.value}
                      suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                      duration={2}
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs text-gray-300 font-medium leading-snug">
                    {stat.label}
                  </div>
                  <div className="w-6 h-0.5 bg-[#FF2A2A] rounded-full lg:ml-auto mt-1 shadow-[0_0_6px_#FF2A2A] group-hover:w-10 transition-all duration-300" />
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Row: Centered Scroll Indicator (No collision with bottom-right chatbot) */}
      <div className="relative z-20 w-full flex items-center justify-center select-none pointer-events-auto pb-3">
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="inline-flex flex-col items-center space-y-2 text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 group-hover:text-white transition-colors">
            Scroll Down
          </span>
          <div className="relative flex flex-col items-center justify-center h-6 w-2">
            <span className="w-px h-full bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
            <span className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-bounce-down" />
          </div>
        </button>
      </div>
    </section>
  );
}
