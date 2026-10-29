import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20, duration: 1.2 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-black/10 dark:border-white/10 py-12 text-xs text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <div className="flex items-center space-x-1">
            <span className="font-display font-black text-lg text-gray-950 dark:text-white">SHIYAB</span>
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]" />
          </div>
          <span className="hidden sm:inline-block text-gray-400 dark:text-gray-600">|</span>
          <span>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-6">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer">Skills</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer">Projects</a>
          <a href="#hackathons" onClick={(e) => handleNavClick(e, 'hackathons')} className="hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer">Hackathons</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gray-950 dark:hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] transition-all group shadow-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
