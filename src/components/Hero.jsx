import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Github, 
  Youtube, 
  Rocket, 
  Layers, 
  Trophy, 
  Heart, 
  Code2, 
  Box, 
  BookOpen, 
  Users, 
  ArrowDown 
} from 'lucide-react';
import gsap from 'gsap';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';
import CountUp from './common/CountUp';
import MagneticButton from './common/MagneticButton';
import { OrbitalRingsBack, OrbitalRingsFront, FloatingTechBadges } from './common/HeroOrbitalRings';
import rockyForeground from '../assets/photos/rocky-foreground.png';

// Custom X (Twitter) Logo SVG
function XIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// 4 Statistics Cards matching the reference design
const STATS_DATA = [
  { value: '10+', label: 'Projects Completed', icon: Rocket },
  { value: '2+', label: 'Years Building Products', icon: Layers },
  { value: '5+', label: 'Hackathon Achievements', icon: Trophy },
  { value: '100%', label: 'Passion for Building', icon: Heart },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle mouse movement for gentle parallax and reactive ambient lighting
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

  // Cinematic GSAP Entrance Timeline
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Giant deep-red SHIYAB background letters reveal
      tl.fromTo(
        '.hero-watermark-letter',
        { opacity: 0, y: 40, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.08 },
        0.1
      );

      // 2. Center portrait rises smoothly
      tl.fromTo(
        '.hero-portrait-layer',
        { opacity: 0, y: 50, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: 'expo.out' },
        0.25
      );

      // 3. Neon orbital rings illuminate
      tl.fromTo(
        '.hero-orbital-rings-layer',
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
        0.4
      );

      // 4. Headline line by line
      tl.fromTo(
        '.hero-headline-line',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
        0.3
      );

      // 5. Role pill & bio description
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

      // 7. Right-side stats cards slide in
      tl.fromTo(
        '.hero-stat-card',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.75, stagger: 0.08 },
        0.65
      );

      // 8. Bottom rocky foreground and feature dock
      tl.fromTo(
        '.hero-bottom-dock',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        0.85
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-3"
    >
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Atmospheric Crimson Radial Backlight behind Portrait */}
      <div
        className="absolute top-[28%] sm:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1200px] h-[450px] md:h-[600px] pointer-events-none z-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 42, 42, 0.45) 0%, rgba(180, 18, 18, 0.22) 45%, rgba(5, 5, 5, 0) 75%)',
          filter: 'blur(60px)',
          transform: `translate(calc(-50% + ${mousePos.x * 12}px), calc(-50% + ${mousePos.y * 10}px))`,
          transition: 'transform 0.22s ease-out',
        }}
      />

      {/* Background Red Polygon/Flares on Corners */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#FF2A2A]/15 to-transparent pointer-events-none z-0 blur-3xl opacity-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#FF2A2A]/15 to-transparent pointer-events-none z-0 blur-3xl opacity-50" />

      {/* GIANT "SHIYAB" BACKGROUND 3D TYPOGRAPHY (Deep crimson red volumetric letters) */}
      <div className="hidden lg:block absolute top-[21%] sm:top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] px-6 sm:px-10 xl:px-14 select-none pointer-events-none z-0 opacity-75">
        <div className="flex items-center justify-between w-full tracking-wider">
          {['S', 'H', 'I', 'Y', 'A', 'B'].map((letter, i) => (
            <span
              key={i}
              className="hero-watermark-letter font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#b31414] via-[#5c0808] to-[#140000] drop-shadow-[0_0_35px_rgba(255,42,42,0.35)] text-[clamp(4.5rem,14vw,15.5rem)] leading-none"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* CENTER PORTRAIT STACK WITH 3D ORBITAL RINGS & BADGES (Positioned Center-Right for Perfect Composition) */}
      <div className="hidden lg:flex absolute bottom-0 left-[53%] xl:left-[52.5%] -translate-x-1/2 z-10 pointer-events-none select-none items-end justify-center w-full max-w-[1440px] h-full">
        <div className="hero-portrait-layer relative flex items-end justify-center w-[740px] xl:w-[840px] h-full">
          
          {/* 1. NEON ORBITAL RINGS: Back Arcs (Passes behind neck and shoulders at z-[5]) */}
          <div className="hero-orbital-rings-layer absolute inset-0 z-[5] pointer-events-none">
            <OrbitalRingsBack />
          </div>

          {/* 2. Soft backlight halo directly behind head */}
          <div
            className="absolute bottom-[44%] left-1/2 -translate-x-1/2 w-[380px] sm:w-[460px] h-[380px] sm:h-[460px] bg-[#FF2A2A]/30 blur-[75px] rounded-full z-[6]"
            style={{
              transform: `translate(calc(-50% + ${mousePos.x * 8}px), ${mousePos.y * 6}px)`,
              transition: 'transform 0.22s ease-out',
            }}
          />

          {/* 3. Original Cutout Portrait Image (z-[10]) */}
          <img
            src={HERO_DATA.portrait}
            alt={PERSONAL_INFO.name}
            className="relative z-10 h-[56vh] xs:h-[62vh] sm:h-[76vh] md:h-[84vh] lg:h-[84vh] xl:h-[88vh] max-h-[840px] w-auto object-contain select-none filter contrast-[1.05] brightness-[1.0] block transform origin-bottom scale-[1.02] xl:scale-[1.05]"
            style={{
              transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 4}px)`,
              transition: 'transform 0.22s ease-out',
            }}
          />

          {/* 4. NEON ORBITAL RINGS: Front Arcs (Sweeps in front of forearm and torso at z-[15]) */}
          <div className="hero-orbital-rings-layer absolute inset-0 z-[15] pointer-events-none">
            <OrbitalRingsFront />
          </div>

          {/* 5. FLOATING TECHNOLOGY BADGES (React, Node.js, MongoDB, Full-Stack Dev at z-[20]) */}
          <FloatingTechBadges
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            className="z-20"
          />

        </div>
      </div>

      {/* 6. DRAMATIC ROCKY FOREGROUND RIDGE (Spans full width across lower hero, layered at z-[18]) */}
      <div className="hidden lg:block absolute -bottom-14 xl:-bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[1440px] pointer-events-none select-none z-[18]">
        <img
          src={rockyForeground}
          alt="Rocky Terrain Foreground"
          className="w-full h-auto max-h-[290px] object-contain object-bottom filter drop-shadow-[0_0_25px_rgba(255,42,42,0.45)]"
        />
      </div>

      {/* THREE-COLUMN BALANCED DESKTOP LAYOUT (Z-25): Left Copy · Center Spacing · Right 4 Stats Cards */}
      <div className="relative z-25 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-14 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 pb-12">
          
          {/* 1. LEFT COLUMN: Roles, Headline, Bio, CTAs, Socials */}
          <div className="max-w-md lg:max-w-[480px] xl:max-w-[520px] w-full flex flex-col justify-center space-y-5 text-left">
            
            {/* Role Badge matching reference capsule */}
            <div className="hero-bio-element">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-gray-300">
                <span>Developer</span>
                <span className="text-[#FF2A2A]">•</span>
                <span>Designer</span>
                <span className="text-[#FF2A2A]">•</span>
                <span>Problem Solver</span>
              </div>
            </div>

            {/* Headline with hand-drawn red curl underline */}
            <div className="space-y-1">
              <h1 className="hero-headline-line text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] whitespace-nowrap">
                {HERO_DATA.headline.line1}
              </h1>
              <h1 className="hero-headline-line text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] relative whitespace-nowrap">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] drop-shadow-[0_0_25px_rgba(255,42,42,0.7)] relative inline-block">
                  {HERO_DATA.headline.line2Highlight}
                  
                  {/* Hand-drawn red brush underline curl */}
                  <svg
                    className="absolute -bottom-2 sm:-bottom-2.5 left-0 w-full h-3 sm:h-3.5 text-[#FF2A2A] overflow-visible"
                    viewBox="0 0 240 16"
                    fill="none"
                  >
                    <path
                      d="M 4 8 Q 120 15, 236 7 Q 150 14, 18 10"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Bio Subtitle */}
            <p className="hero-bio-element text-xs sm:text-sm text-gray-300 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] max-w-lg">
              {HERO_DATA.bio}
            </p>

            {/* CTAs matching reference */}
            <div className="hero-action-element flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
              <MagneticButton strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleScrollTo('projects')}
                  className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF2A2A] to-[#ff3b3b] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.5)] hover:shadow-[0_0_35px_rgba(255,42,42,0.8)] transition-all duration-300 cursor-pointer"
                >
                  <span>View My Work</span>
                  <span className="text-sm">↗</span>
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
            <div className="hero-action-element pt-1 flex items-center space-x-3 pointer-events-auto">
              <div className="flex items-center space-x-2">
                {[
                  { href: PERSONAL_INFO.socials.github, icon: Github, label: 'GitHub' },
                  { href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: PERSONAL_INFO.socials.twitter, icon: XIcon, label: 'X (Twitter)' },
                  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={idx}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-lg border border-white/15 bg-black/75 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/15 transition-all shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  );
                })}
              </div>
              <span className="text-[11px] text-gray-400 font-light hidden sm:inline-block pl-1">
                {HERO_DATA.taglinePrompt}
              </span>
            </div>
          </div>

          {/* 2. MOBILE/TABLET-ONLY PORTRAIT WITH BACKLIGHT */}
          <div className="w-full flex justify-center lg:hidden pointer-events-none select-none my-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FF2A2A]/30 blur-[55px] rounded-full -z-10" />
              <img
                src={HERO_DATA.portraitMobile}
                alt={PERSONAL_INFO.name}
                className="h-[240px] xs:h-[280px] sm:h-[340px] w-auto object-contain filter contrast-[1.05] brightness-[1.0]"
              />
            </div>
          </div>

          {/* 3. RIGHT COLUMN: 4 Vertically Arranged Statistics Cards matching Reference */}
          <div className="w-full lg:w-auto flex flex-col space-y-3.5 sm:space-y-4 shrink-0">
            {STATS_DATA.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, x: -3 }}
                  className="hero-stat-card p-3 sm:p-3.5 w-full sm:w-[220px] rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#FF2A2A]/60 shadow-[0_0_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,42,42,0.3)] transition-all duration-300 cursor-default group"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A]/20 transition-all shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-display font-black text-xl sm:text-2xl text-white tracking-tight drop-shadow-[0_0_12px_rgba(255,42,42,0.3)] group-hover:text-[#FF2A2A] transition-colors">
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

      {/* BOTTOM SECTION: SCROLL TO EXPLORE & HORIZONTAL FEATURE STRIP */}
      <div className="hero-bottom-dock relative z-30 w-full flex flex-col items-center justify-center space-y-3 select-none pointer-events-auto pb-2">
        
        {/* Scroll to Explore indicator with red circle arrow */}
        <button
          onClick={() => handleScrollTo('about')}
          aria-label="Scroll to Explore"
          className="inline-flex flex-col items-center space-y-1 text-xs font-mono tracking-wider text-gray-300 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[11px] text-gray-300 group-hover:text-white transition-colors">
            Scroll to Explore
          </span>
          <div className="w-7 h-7 rounded-full border border-[#FF2A2A] text-[#FF2A2A] flex items-center justify-center shadow-[0_0_12px_rgba(255,42,42,0.4)] group-hover:bg-[#FF2A2A] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(255,42,42,0.8)] transition-all">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </button>

        {/* Horizontal Feature Strip Pill Bar matching reference */}
        <div className="hidden lg:flex items-center space-x-6 px-8 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 shadow-[0_0_35px_rgba(0,0,0,0.9)] text-xs font-mono">
          <div className="flex items-center space-x-2 text-gray-300">
            <Code2 className="w-4 h-4 text-[#FF2A2A]" />
            <span><strong className="text-white">Build</strong> Real Products</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <Box className="w-4 h-4 text-[#FF2A2A]" />
            <span><strong className="text-white">Solve</strong> Real Problems</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <BookOpen className="w-4 h-4 text-[#FF2A2A]" />
            <span><strong className="text-white">Learn</strong> Continuously</span>
          </div>
          <span className="text-white/20">/</span>
          <div className="flex items-center space-x-2 text-gray-300">
            <Users className="w-4 h-4 text-[#FF2A2A]" />
            <span><strong className="text-white">Collaborate</strong> With Teams</span>
          </div>
        </div>

      </div>

      {/* Red Geometric Polygon Corner Accents (Bottom-Left and Bottom-Right) */}
      <div className="hidden lg:block absolute bottom-2 left-4 pointer-events-none select-none z-20">
        <svg className="w-24 h-16 text-[#FF2A2A]/40" viewBox="0 0 100 60" fill="none">
          <path d="M 0 60 L 40 40 L 70 55" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 10 60 L 50 35 L 90 50" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>
      <div className="hidden lg:block absolute bottom-2 right-4 pointer-events-none select-none z-20">
        <svg className="w-24 h-16 text-[#FF2A2A]/40" viewBox="0 0 100 60" fill="none">
          <path d="M 100 60 L 60 40 L 30 55" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 90 60 L 50 35 L 10 50" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>
    </section>
  );
}
