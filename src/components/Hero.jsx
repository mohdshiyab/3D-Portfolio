import React from 'react';
import { ArrowRight, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { PERSONAL_INFO, HERO_DATA } from '../data/portfolioData';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-between overflow-hidden pt-20 sm:pt-24 pb-4"
    >
      {/* Background Subtle Tech Grid (Matching Pic 2) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Atmospheric Crimson Radial Glow Behind Name & Portrait */}
      <div 
        className="absolute top-[26%] sm:top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] md:w-[1250px] h-[450px] md:h-[620px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(229, 32, 32, 0.42) 0%, rgba(160, 16, 16, 0.2) 45%, rgba(5, 5, 5, 0) 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Background name watermark: "SHIYAB", kept faint so it reads as texture, not a headline.
          Hidden below lg — at phone/tablet widths it collided with the role tags and headline. */}
      <div className="hidden lg:block absolute top-[20%] sm:top-[22%] lg:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1080px] px-4 sm:px-6 select-none pointer-events-none z-0 opacity-100">
        <div className="flex items-center justify-between w-full">
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            S
          </span>
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            H
          </span>
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            I
          </span>
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            Y
          </span>
          <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            A
          </span>
          <span className="relative font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e52828] via-[#ba1414] to-[#600707] text-[clamp(2.6rem,11.5vw,13.5rem)] leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
            B
            {/* Cursive Script "Build Learn Create Repeat" nestled right at the right edge of 'B' (Exact match to Pic 2) */}
            <div className="absolute left-[58%] sm:left-[64%] top-[26%] sm:top-[28%] text-left select-none pointer-events-none z-10 hidden sm:block">
              <div className="font-script text-2xl sm:text-3xl lg:text-[31px] text-white/90 font-bold rotate-[-3deg] inline-flex flex-col items-start leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
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
          </span>
        </div>
      </div>

      {/* CENTERED LARGE PORTRAIT (Flush to bottom-0, filling corners, matching Pic 2 framing).
          Desktop-only — this absolute bottom-anchored treatment overlapped the stats block
          on phones, so mobile gets its own inline portrait further down instead. */}
      <div className="hidden lg:flex absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none items-end justify-center">
        {/* Soft crimson backlight halo behind head */}
        <div className="absolute bottom-[44%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[440px] h-[340px] sm:h-[440px] bg-[#FF2A2A]/20 blur-[85px] rounded-full -z-10" />

        <div className="relative flex items-end justify-center">
          <img
            src={HERO_DATA.portrait}
            alt={PERSONAL_INFO.name}
            className="h-[46vh] xs:h-[52vh] sm:h-[70vh] md:h-[84vh] lg:h-[88vh] max-h-[820px] w-auto object-contain select-none filter contrast-[1.03] brightness-[0.98] block transform origin-bottom scale-[1.08]"
          />
        </div>
      </div>

      {/* FOREGROUND CONTENT LAYER (Z-20): Left Bio/Actions & Right Stats */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex-1 flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 pt-4 pb-4">
          
          {/* LEFT COLUMN: Role, Headline, Bio, Buttons, Social */}
          <div className="max-w-md w-full flex flex-col justify-center space-y-6 text-left">
            
            {/* Roles */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono tracking-widest text-gray-400 uppercase font-semibold">
                {HERO_DATA.roles.map((role, idx) => (
                  <React.Fragment key={role}>
                    <span>{role}</span>
                    {idx < HERO_DATA.roles.length - 1 && (
                      <span className="text-gray-600">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="w-12 h-0.5 bg-white/20 rounded-full" />
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                {HERO_DATA.headline.line1}
              </h2>
              <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
                <span>{HERO_DATA.headline.line2Prefix}</span>
                <span className="text-[#FF2A2A] drop-shadow-[0_0_25px_rgba(255,42,42,0.75)]">
                  {HERO_DATA.headline.line2Highlight}
                </span>
              </h2>
            </div>

            {/* Bio Subtitle */}
            <p className="text-xs sm:text-sm text-gray-300/90 font-light leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
              {HERO_DATA.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1 pointer-events-auto">
              <button
                onClick={() => handleScrollTo('projects')}
                className="group relative inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.5)] hover:shadow-[0_0_40px_rgba(255,42,42,0.85)] hover:bg-[#ff3b3b] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-black/70 backdrop-blur-sm border border-white/25 text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-gray-300" />
              </button>
            </div>

            {/* Social Icons & Bottom Prompt */}
            <div className="pt-2 flex items-center space-x-4 pointer-events-auto">
              <div className="flex items-center space-x-2">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-lg border border-white/15 bg-black/80 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 hover:scale-105 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-lg border border-white/15 bg-black/80 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 hover:scale-105 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-9 h-9 rounded-lg border border-white/15 bg-black/80 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 hover:scale-105 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send Email"
                  className="w-9 h-9 rounded-lg border border-white/15 bg-black/80 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <div className="h-4 w-px bg-white/15 hidden sm:block" />
              <span className="text-[11px] text-gray-400 font-light hidden sm:inline-block">
                {HERO_DATA.taglinePrompt}
              </span>
            </div>

          </div>

          {/* MOBILE/TABLET-ONLY PORTRAIT: sits in normal document flow between the bio
              and the stats so nothing overlaps — the dramatic bleed-to-edge version above
              is desktop-only. */}
          <div className="w-full flex justify-center lg:hidden pointer-events-none select-none">
            <div className="relative">
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[260px] h-[260px] bg-[#FF2A2A]/20 blur-[70px] rounded-full -z-10" />
              <img
                src={HERO_DATA.portraitMobile}
                alt={PERSONAL_INFO.name}
                className="h-[300px] xs:h-[340px] sm:h-[420px] w-auto object-contain filter contrast-[1.03] brightness-[0.98]"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Key Stats */}
          <div className="grid grid-cols-3 gap-4 w-full lg:flex lg:flex-col lg:w-auto lg:justify-between lg:items-end lg:gap-0 lg:space-y-6 text-left lg:text-right">
            {HERO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#FF2A2A] tracking-tight drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]">
                  {stat.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-300 font-medium leading-snug">
                  {stat.label}
                </div>
                <div className="w-6 h-0.5 bg-[#FF2A2A] rounded-full lg:ml-auto mt-1 shadow-[0_0_6px_#FF2A2A]" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Row: Right-aligned Scroll Indicator */}
      <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex items-center justify-end select-none pointer-events-auto">
        <button
          onClick={() => handleScrollTo('about')}
          className="inline-flex items-center space-x-3 text-xs font-mono tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer group"
        >
          <div className="relative flex flex-col items-center justify-center h-8 w-2">
            <span className="w-px h-full bg-white/20 group-hover:bg-white/40 transition-colors" />
            <span className="absolute w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-pulse" />
          </div>
          <span className="text-[11px] uppercase font-semibold">Scroll Down</span>
        </button>
      </div>

    </section>
  );
}
