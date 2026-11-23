import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, Search, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playClick, isSoundEnabled, setSoundEnabled, playSuccess } from '../utils/soundEffects';

export default function Navbar({ 
  activeSection, 
  setActiveSection, 
  isDarkMode, 
  onToggleTheme,
  onOpenCommandPalette,
  onOpenRecruiter
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    let lastScrolled = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > 30;
      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    setActiveSection(targetId);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(targetElem, { offset: -20, duration: 1.2 });
      } else {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-black/10 dark:border-white/10 py-3 shadow-md dark:shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-14 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-1 group"
        >
          <span className="font-display font-black text-2xl sm:text-3xl tracking-wider text-gray-950 dark:text-white transition-colors group-hover:text-gray-700 dark:group-hover:text-gray-200">
            SHIYAB
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A] inline-block shadow-[0_0_12px_#FF2A2A]"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-black/60 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-[13px] font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF2A2A] to-[#d62020] text-white font-semibold shadow-[0_0_18px_rgba(255,42,42,0.55)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Tactile Audio Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={soundOn ? 'Mute tactile sound effects' : 'Enable tactile audio effects'}
            title={soundOn ? 'Sound FX: Enabled' : 'Sound FX: Muted'}
            className={`p-2 rounded-full border transition-all duration-300 cursor-pointer ${
              soundOn
                ? 'border-[#FF2A2A]/60 bg-[#FF2A2A]/15 text-[#FF2A2A] shadow-[0_0_10px_rgba(255,42,42,0.3)]'
                : 'border-white/15 text-gray-400 hover:text-white hover:border-white/30'
            }`}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Theme Toggle (Sun/Moon Pill matching reference) */}
          <button
            onClick={() => {
              playClick();
              onToggleTheme();
            }}
            aria-label="Toggle Theme"
            aria-pressed={!isDarkMode}
            className="relative w-12 h-6 rounded-full bg-[#111111] border border-white/20 p-0.5 flex items-center cursor-pointer transition-colors hover:border-[#FF2A2A]/60 shrink-0 shadow-sm"
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-transform duration-300 ease-out ${
                isDarkMode
                  ? 'translate-x-0 bg-[#1c1c1c] text-gray-400'
                  : 'translate-x-6 bg-[#FF2A2A] text-white shadow-[0_0_8px_#FF2A2A]'
              }`}
            >
              {isDarkMode ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
            </span>
          </button>

          {/* Download CV CTA */}
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              playSuccess();
              const link = document.createElement('a');
              link.href = PERSONAL_INFO.resumeUrl;
              link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-200 border border-white/15 bg-white/[0.04] hover:border-[#FF2A2A] hover:text-white hover:bg-white/[0.08] transition-all duration-300 shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-gray-300" />
            <span>Download CV</span>
          </a>

          {/* Let's Talk CTA button matching reference */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center space-x-1 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#FF2A2A] to-[#ff3b3b] shadow-[0_0_20px_rgba(255,42,42,0.5)] hover:shadow-[0_0_28px_rgba(255,42,42,0.8)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <span>Let's Talk</span>
            <span className="text-xs">↗</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/15"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 dark:bg-[#080808]/98 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-6 space-y-4 shadow-2xl transition-all">
          {/* Mobile Action Shortcuts */}
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                playClick();
                onOpenCommandPalette?.();
              }}
              className="flex items-center justify-center space-x-1.5 p-2 rounded-xl border border-black/10 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.04] text-xs font-mono font-semibold"
            >
              <Search className="w-3.5 h-3.5 text-[#FF2A2A]" />
              <span>Command (⌘K)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                playClick();
                onOpenRecruiter?.();
              }}
              className="flex items-center justify-center space-x-1.5 p-2 rounded-xl border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-[#FF2A2A] text-xs font-mono font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>30s Pitch</span>
            </button>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF2A2A]/10 text-white border-l-2 border-[#FF2A2A]'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF2A2A]"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                playSuccess();
                const link = document.createElement('a');
                link.href = PERSONAL_INFO.resumeUrl;
                link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-lg bg-[#FF2A2A] text-white text-sm font-semibold shadow-[0_0_15px_rgba(255,42,42,0.4)]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
