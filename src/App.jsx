import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollProgress from './components/common/ScrollProgress';
import NoiseOverlay from './components/common/NoiseOverlay';
import useGSAPScrollAnimations from './hooks/useGSAPScrollAnimations';

// Lazy-loaded dialogs & modals (only loaded when user triggers them)
const CommandPalette = lazy(() => import('./components/common/CommandPalette'));
const RecruiterModal = lazy(() => import('./components/common/RecruiterModal'));

export default function App() {
  useGSAPScrollAnimations();

  const [activeSection, setActiveSection] = useState('home');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('theme') !== 'light';
  });

  // Global Keyboard listener for Command Palette (Cmd+K / Ctrl+K / /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      } else if (
        e.key === '/' && 
        !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', !isDarkMode);
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // High-performance IntersectionObserver for nav active state (off-main-thread)
  useEffect(() => {
    const sections = ['home', 'featured-project', 'projects', 'about', 'skills', 'hackathons', 'experience', 'contact'];
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0, 0.2, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    const params = new URLSearchParams(window.location.search);
    const targetSection = params.get('section');
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* Filmic Tactile Noise / Grain Texture */}
      <NoiseOverlay />

      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      {/* Reordered content sections: Hero -> Tech Marquee -> Featured Flagship -> Selected Projects -> About -> Skills -> Hackathons -> Experience -> Contact */}
      <main className="relative z-20">
        <Hero />
        <TechMarquee />
        <FeaturedProject />
        <Projects />
        <About />
        <Skills />
        <Hackathons />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ChatBot />

      {/* Global Command Palette & 30s Pitch Modals (Loaded on Demand) */}
      <Suspense fallback={null}>
        {isCommandPaletteOpen && (
          <CommandPalette
            isOpen={isCommandPaletteOpen}
            onClose={() => setIsCommandPaletteOpen(false)}
            onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
            onToggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
            onOpenChat={() => window.__openChat?.()}
          />
        )}

        {isRecruiterModalOpen && (
          <RecruiterModal
            isOpen={isRecruiterModalOpen}
            onClose={() => setIsRecruiterModalOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}
