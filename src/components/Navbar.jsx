import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar({ activeSection, setActiveSection, isDarkMode, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      targetElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
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
          <span className="font-display font-black text-2xl sm:text-3xl tracking-wider text-white transition-colors group-hover:text-gray-200">
            SHIYAB
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF2A2A] inline-block shadow-[0_0_12px_#FF2A2A]"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-black/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF2A2A] rounded-full shadow-[0_0_8px_#FF2A2A]"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center space-x-2.5 sm:space-x-3">
          {/* Resume Download CTA (desktop) */}
          <a
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
            className="hidden lg:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 border border-white/15 bg-white/[0.03] hover:border-[#FF2A2A] hover:text-white transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5 text-[#FF2A2A]" />
            <span>Resume</span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
            aria-pressed={!isDarkMode}
            className="relative w-12 h-6 rounded-full bg-[#111111] border border-white/20 p-0.5 flex items-center cursor-pointer transition-colors hover:border-[#FF2A2A]/60 shrink-0"
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 border border-white/15"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl transition-all">
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
