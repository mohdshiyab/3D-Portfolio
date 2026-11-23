import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import CountUp from './common/CountUp';
import MagneticButton from './common/MagneticButton';
import HeroSubtleRing from './common/HeroSubtleRing';

const CORE_TECH_STACK = [
  'React 18',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'FastAPI',
  'Tailwind CSS',
  'Docker',
];

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle mouse movement for gentle parallax (very low multiplier for elegance)
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
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

  // Cinematic, Staggered GSAP Entrance Timeline
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Subtle background watermark reveal
      tl.fromTo(
        '.hero-watermark-letter',
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.06 },
        0.1
      );

      // 2. Portrait rises smoothly with natural easing
      tl.fromTo(
        '.hero-portrait-layer',
        { opacity: 0, y: 40, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.25, ease: 'expo.out' },
        0.25
      );

      // 3. Subtle ambient ring & halo fade in
      tl.fromTo(
        '.hero-subtle-ring',
        { opacity: 0 },
        { opacity: 1, duration: 1.2 },
        0.4
      );

      // 4. Headline revealed line by line
      tl.fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
        0.3
      );

      // 5. Role badge & bio description
      tl.fromTo(
        '.hero-bio-element',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1 },
        0.55
      );

      // 6. Action buttons & social icons
      tl.fromTo(
        '.hero-action-element',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
        0.75
      );

      // 7. Right-side editorial statistics
      tl.fromTo(
        '.hero-stat-card',
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.75, stagger: 0.1 },
        0.7
      );

      // 8. Horizontal tech stack strip
      tl.fromTo(
        '.hero-tech-strip',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.9
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-20 lg:pb-4"
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Atmospheric Crimson Radial Glow Behind Portrait (Soft, diffuse, non-intrusive) */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] md:w-[1100px] h-[400px] md:h-[550px] pointer-events-none z-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 42, 42, 0.28) 0%, rgba(180, 18, 18, 0.12) 45%, rgba(5, 5, 5, 0) 75%)',
          filter: 'blur(65px)',
          transform: `translate(calc(-50% + ${mousePos.x * 10}px), calc(-50% + ${mousePos.y * 8}px))`,
          transition: 'transform 0.25s ease-out',
        }}
      />

      {/* Background name watermark: "SHIYAB" (Subtle, low-opacity architectural presence) */}
      <div className="hidden lg:block absolute top-[22%] sm:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1400px] px-8 sm:px-12 xl:px-16 select-none pointer-events-none z-0 opacity-15">
        <div className="flex items-center justify-between w-full tracking-wider">
          {['S', 'H', 'I', 'Y', 'A', 'B'].map((letter, i) => (
            <span
              key={i}
              className="hero-watermark-letter font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white/35 via-white/10 to-transparent text-[clamp(3rem,11.5vw,13.5rem)] leading-none"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* CENTERED PORTRAIT WITH SUBTLE ARCHITECTURAL RING (Pure CSS centering to prevent Motion override) */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none items-end justify-center">
        <div className="hero-portrait-layer relative flex items-end justify-center">
          
          {/* Subtle Thin Accent Elliptical Ring (BEHIND portrait, z-5, 1px stroke, low opacity) */}
          <div className="hero-subtle-ring w-[680px] xl:w-[780px] h-[780px] xl:h-[860px] absolute -bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
            <HeroSubtleRing />
          </div>

          {/* Soft backlight halo behind head */}
          <div
            className="absolute bottom-[44%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] bg-[#FF2A2A]/20 blur-[85px] rounded-full -z-10"
            style={{
              transform: `translate(calc(-50% + ${mousePos.x * 8}px), ${mousePos.y * 6}px)`,
              transition: 'transform 0.22s ease-out',
            }}
          />

          {/* Portrait Image (Completely unchanged, centered with subtle micro-parallax) */}
          <img
            src={HERO_DATA.portrait}
            alt={PERSONAL_INFO.name}
            className="relative z-10 h-[50vh] xs:h-[56vh] sm:h-[72vh] md:h-[82vh] lg:h-[82vh] xl:h-[86vh] max-h-[820px] w-auto object-contain select-none filter contrast-[1.03] brightness-[0.98] block transform origin-bottom scale-[1.02] xl:scale-[1.05]"
            style={{
              transform: `translate(${mousePos.x * 4}px, ${mousePos.y * 3}px)`,
              transition: 'transform 0.22s ease-out',
            }}
          />

        </div>
      </div>

      {/* THREE-PART BALANCED DESKTOP LAYOUT (Z-20): Left Content · Center Portrait · Right Clean Stats */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 pt-2 pb-6">
          
          {/* 1. LEFT COLUMN: Roles, Headline, Bio, CTAs, Socials */}
          <div className="max-w-md lg:max-w-[420px] xl:max-w-[460px] w-full flex flex-col justify-center space-y-5 text-left">
            
            {/* Roles Bar */}
            <div className="hero-bio-element space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
                {HERO_DATA.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span className="hover:text-[#FF2A2A] transition-colors">{role}</span>
                    {idx < HERO_DATA.roles.length - 1 && <span className="text-gray-600">/</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="h-0.5 w-10 bg-[#FF2A2A]/70 rounded-full" />
            </div>

            {/* Headline (Line by Line reveal) */}
            <div className="space-y-1">
              <h2 className="hero-headline-line text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                {HERO_DATA.headline.line1}
              </h2>
              <h2 className="hero-headline-line text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] drop-shadow-[0_0_20px_rgba(255,42,42,0.6)]">
                  {HERO_DATA.headline.line2Highlight}
                </span>
              </h2>
            </div>

            {/* Bio Subtitle */}
            <p className="hero-bio-element text-xs sm:text-sm text-gray-300/90 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] max-w-lg">
              {HERO_DATA.bio}
            </p>

            {/* CTAs */}
            <div className="hero-action-element flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
              <MagneticButton strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleScrollTo('projects')}
                  className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] hover:bg-[#ff3b3b] transition-all duration-300 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </MagneticButton>

              <MagneticButton strength={0.25}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleScrollTo('contact')}
                  className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-pointer"
                >
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-gray-300" />
                </motion.button>
              </MagneticButton>
            </div>

            {/* Social Icons & Tagline Prompt */}
            <div className="hero-action-element pt-1 flex items-center space-x-4 pointer-events-auto">
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
                      className="w-9 h-9 rounded-lg border border-white/15 bg-black/70 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-colors shadow-sm"
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

          {/* 2. MOBILE/TABLET-ONLY PORTRAIT (Clean, unencumbered, with subtle soft backlight) */}
          <div className="w-full flex justify-center lg:hidden pointer-events-none select-none my-2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF2A2A]/20 blur-[55px] rounded-full -z-10" />
              <img
                src={HERO_DATA.portraitMobile}
                alt={PERSONAL_INFO.name}
                className="h-[230px] xs:h-[270px] sm:h-[340px] w-auto object-contain filter contrast-[1.03] brightness-[0.98]"
              />
            </div>
          </div>

          {/* 3. RIGHT COLUMN: Editorial Clean Statistics (No heavy chunky boxes, Swiss minimalism) */}
          <div className="w-full lg:w-auto self-start lg:self-auto flex flex-row lg:flex-col justify-between lg:justify-center items-start lg:items-end gap-3 sm:gap-8 lg:gap-10 lg:border-l lg:border-white/10 lg:pl-8 text-left lg:text-right shrink-0 max-w-[260px] xs:max-w-[280px] sm:max-w-none">
            {HERO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className="hero-stat-card space-y-1 group cursor-default"
              >
                <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#FF2A2A] tracking-tight leading-none group-hover:drop-shadow-[0_0_12px_rgba(255,42,42,0.5)] transition-all">
                  <CountUp
                    to={stat.value}
                    suffix={stat.value.includes('+') ? '+' : stat.value.includes('%') ? '%' : ''}
                    duration={2}
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-gray-400 uppercase tracking-wider leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CLEAN HORIZONTAL TECH STACK STRIP & SCROLL PROMPT */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 pt-4 border-t border-white/[0.08] select-none pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 sm:pr-14">
          
          {/* Relocated Horizontal Tech Stack */}
          <div className="hero-tech-strip flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono">
            <span className="text-[10px] tracking-widest uppercase text-gray-500 font-semibold">
              [ STACK ]
            </span>
            {CORE_TECH_STACK.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-gray-400 hover:text-white transition-colors cursor-default">
                  {tech}
                </span>
                {idx < CORE_TECH_STACK.length - 1 && (
                  <span className="text-white/15 select-none hidden xs:inline">·</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Clean Scroll Indicator */}
          <button
            onClick={() => handleScrollTo('about')}
            aria-label="Scroll to About section"
            className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">
              Scroll Down
            </span>
            <div className="relative flex flex-col items-center justify-center h-4 w-2">
              <span className="w-px h-full bg-white/20 group-hover:bg-[#FF2A2A] transition-colors" />
              <span className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-bounce-down" />
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
