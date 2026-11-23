import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Instagram, Rocket, Layers, Heart, Code2, Sparkles, BookOpen, Users, Compass } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import CountUp from './common/CountUp';
import MagneticButton from './common/MagneticButton';
import { OrbitalRingsBack, OrbitalRingsFront, FloatingTechBadges } from './common/HeroOrbitalRings';

const statIcons = [Rocket, Layers, Heart];

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth mouse movement for parallax & ambient glow
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2; // -1 to 1
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -20, duration: 0.85 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Cinematic GSAP Entrance Timeline
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Background SHIYAB 3D letters reveal
      tl.fromTo(
        '.hero-letter',
        { opacity: 0, y: 40, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, stagger: 0.08 },
        0.15
      );

      // 2. Portrait rises and fades in smoothly
      tl.fromTo(
        '.hero-portrait-layer',
        { opacity: 0, y: 45, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: 'expo.out' },
        0.3
      );

      // 3. Orbital rings illuminate with glowing bloom
      tl.fromTo(
        '.hero-orbital-rings-layer',
        { opacity: 0, scale: 0.82 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
        0.45
      );

      // 4. Headline line by line
      tl.fromTo(
        '.hero-title-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
        0.35
      );

      // 5. Bio description & roles
      tl.fromTo(
        '.hero-bio-anim',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.65
      );

      // 6. Floating tech badges pop in
      tl.fromTo(
        '.hero-badge-anim',
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'back.out(1.6)' },
        0.75
      );

      // 7. Right stats cards slide in
      tl.fromTo(
        '.hero-stat-card',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.75, stagger: 0.1 },
        0.85
      );

      // 8. CTAs and social links
      tl.fromTo(
        '.hero-cta-anim',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        0.95
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
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
        className="absolute top-[26%] sm:top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1300px] h-[450px] md:h-[650px] pointer-events-none z-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 42, 42, 0.42) 0%, rgba(180, 18, 18, 0.22) 45%, rgba(5, 5, 5, 0) 75%)',
          filter: 'blur(50px)',
          transform: `translate(calc(-50% + ${mousePos.x * 15}px), calc(-50% + ${mousePos.y * 12}px))`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Background name watermark: "SHIYAB" with dramatic 3D volumetric crimson styling */}
      <div className="hidden lg:block absolute top-[20%] sm:top-[22%] lg:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] px-8 sm:px-12 xl:px-16 select-none pointer-events-none z-0 opacity-100">
        <div className="flex items-center justify-between w-full tracking-wider">
          {['S', 'H', 'I', 'Y', 'A', 'B'].map((letter, i) => (
            <span
              key={i}
              className="hero-letter font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#ff3a3a] via-[#c81616] to-[#3a0606] text-[clamp(3rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_35px_rgba(255,42,42,0.28)]"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* CENTERED LARGE PORTRAIT WITH 3D ORBITAL NEON RINGS & FLOATING TECH BADGES */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none items-end justify-center">
        <div className="hero-portrait-layer relative flex items-end justify-center">
          
          {/* LAYER 1: BACK ARCS OF ORBITAL RINGS (z-index 5, passes behind body) */}
          <div className="hero-orbital-rings-layer w-[660px] xl:w-[760px] h-[780px] xl:h-[860px] absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
            <OrbitalRingsBack />
          </div>

          {/* LAYER 2: Soft crimson backlight halo behind head */}
          <div
            className="absolute bottom-[44%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#FF2A2A]/25 blur-[90px] rounded-full -z-10"
            style={{
              transform: `translate(calc(-50% + ${mousePos.x * 12}px), ${mousePos.y * 10}px)`,
              transition: 'transform 0.18s ease-out',
            }}
          />

          {/* LAYER 3: SHIYAB'S PORTRAIT (z-index 10) */}
          <img
            src={HERO_DATA.portrait}
            alt={PERSONAL_INFO.name}
            className="relative z-10 h-[48vh] xs:h-[54vh] sm:h-[70vh] md:h-[82vh] lg:h-[82vh] xl:h-[86vh] max-h-[820px] w-auto object-contain select-none filter contrast-[1.03] brightness-[0.98] block transform origin-bottom scale-[1.02] xl:scale-[1.05]"
            style={{
              transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 4}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          />

          {/* LAYER 4: FRONT ARCS OF ORBITAL RINGS (z-index 15, sweeps across forearm & chest) */}
          <div className="hero-orbital-rings-layer w-[660px] xl:w-[760px] h-[780px] xl:h-[860px] absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-15">
            <OrbitalRingsFront />
          </div>

          {/* LAYER 5: FLOATING TECHNOLOGY BADGES (z-index 20, React, Node.js, MongoDB, Full-Stack Dev) */}
          <div className="hero-badge-anim w-[660px] xl:w-[760px] h-[780px] xl:h-[860px] absolute -bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-20">
            <FloatingTechBadges mouseX={mousePos.x} mouseY={mousePos.y} />
          </div>

        </div>
      </div>

      {/* FOREGROUND CONTENT LAYER (Z-20): Left Bio/Actions & Right Stats */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 pb-4">
          
          {/* LEFT COLUMN: Role, Headline, Bio, Buttons, Social */}
          <div className="max-w-md lg:max-w-[340px] xl:max-w-md w-full flex flex-col justify-center space-y-6 text-left">
            {/* Roles */}
            <div className="hero-bio-anim space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
                {HERO_DATA.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span className="hover:text-[#FF2A2A] transition-colors">{role}</span>
                    {idx < HERO_DATA.roles.length - 1 && <span className="text-gray-600">/</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="h-0.5 w-12 bg-[#FF2A2A]/60 rounded-full" />
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h2 className="hero-title-anim text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                {HERO_DATA.headline.line1}
              </h2>
              <h2 className="hero-title-anim text-4xl sm:text-5xl lg:text-[44px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] drop-shadow-[0_0_25px_rgba(255,42,42,0.75)]">
                  {HERO_DATA.headline.line2Highlight}
                </span>
              </h2>
            </div>

            {/* Bio Subtitle */}
            <p className="hero-bio-anim text-xs sm:text-sm text-gray-300/90 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              {HERO_DATA.bio}
            </p>

            {/* CTAs */}
            <div className="hero-cta-anim flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
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
            </div>

            {/* Social Icons & Bottom Prompt */}
            <div className="hero-cta-anim pt-2 flex items-center space-x-4 pointer-events-auto">
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
            </div>
          </div>

          {/* MOBILE/TABLET-ONLY PORTRAIT WITH NEON ORBITAL AMBIENCE */}
          <div className="w-full flex justify-center lg:hidden pointer-events-none select-none my-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF2A2A]/25 blur-[60px] rounded-full -z-10" />
              {/* Subtle mobile orbital ring */}
              <div className="absolute -inset-4 border border-[#FF2A2A]/40 rounded-full animate-pulse opacity-60 -z-5 rotate-12" />
              <img
                src={HERO_DATA.portraitMobile}
                alt={PERSONAL_INFO.name}
                className="h-[280px] xs:h-[320px] sm:h-[380px] w-auto object-contain filter contrast-[1.03] brightness-[0.98]"
              />
            </div>
          </div>

          {/* RIGHT CLUSTER: Cursive Motto + Glassmorphic Stats Column */}
          <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center lg:items-center justify-between lg:justify-end gap-6 xl:gap-8">
            
            {/* Cursive Script Motto (Build Learn Create Repeat) */}
            <div className="hidden lg:flex flex-col items-start leading-[1.08] select-none pointer-events-none rotate-[-3deg] text-left shrink-0 pr-2">
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
            </div>

            {/* Key Stats Cards matching Reference Glass Panels */}
            <div className="grid grid-cols-3 gap-3 xs:gap-4 w-full lg:flex lg:flex-col lg:w-auto lg:space-y-4 text-left lg:text-right shrink-0">
              {HERO_DATA.stats.map((stat, idx) => {
                const IconComponent = statIcons[idx] || Rocket;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04, x: 2 }}
                    className="hero-stat-card p-3 sm:p-3.5 rounded-2xl bg-black/60 dark:bg-black/60 backdrop-blur-md border border-white/10 dark:border-white/10 hover:border-[#FF2A2A]/50 hover:shadow-[0_0_20px_rgba(255,42,42,0.25)] transition-all duration-300 cursor-default group"
                  >
                    <div className="flex items-center space-x-3 lg:space-x-4">
                      <div className="p-2 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A]/20 transition-all shrink-0 hidden sm:flex">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#FF2A2A] tracking-tight drop-shadow-[0_0_15px_rgba(255,42,42,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.7)] transition-all">
                          <CountUp
                            to={stat.value}
                            suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                            duration={2}
                          />
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-gray-300 font-medium leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Horizon Dock Pill & Scroll Down Indicator */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center space-y-3 select-none pointer-events-auto pb-2">
        
        {/* Futuristic Mission Bar Dock matching Reference Footer */}
        <div className="hidden lg:flex items-center space-x-6 px-6 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] text-xs font-mono">
          <div className="flex items-center space-x-2 text-gray-300">
            <Code2 className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span><strong className="text-white">Build</strong> Real Products</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span><strong className="text-white">Solve</strong> Real Problems</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <BookOpen className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span><strong className="text-white">Learn</strong> Continuously</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <Users className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span><strong className="text-white">Collaborate</strong> With Teams</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to About section"
          className="inline-flex flex-col items-center space-y-1.5 text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer group pt-1"
        >
          <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400 group-hover:text-white transition-colors">
            Scroll to Explore
          </span>
          <div className="relative flex flex-col items-center justify-center h-5 w-2">
            <span className="w-px h-full bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
            <span className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-bounce-down" />
          </div>
        </button>
      </div>
    </section>
  );
}
