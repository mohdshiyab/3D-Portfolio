import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ScrollProgress from './components/common/ScrollProgress';
import ParticlesBackground from './components/common/ParticlesBackground';
import CustomCursor from './components/common/CustomCursor';
import NoiseOverlay from './components/common/NoiseOverlay';
import CommandPalette from './components/common/CommandPalette';
import RecruiterModal from './components/common/RecruiterModal';
import HackerTerminal from './components/common/HackerTerminal';
import useGSAPScrollAnimations from './hooks/useGSAPScrollAnimations';
import Lenis from 'lenis';

export default function App() {
  useGSAPScrollAnimations();

  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
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
      } else if (
        e.key === '`' &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsTerminalOpen(false);
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

  // Optimized momentum scrolling: snappy & responsive on desktop, native 120fps on touch/mobile
  useEffect(() => {
    // Detect mobile touch devices (phones/tablets) to preserve 100% native hardware scroll momentum
    const isTouchOnly = window.matchMedia('(pointer: coarse) and (hover: none)').matches;
    if (isTouchOnly) {
      // On mobile devices, native hardware scrolling is optimal (120Hz/60Hz GPU-accelerated)
      // Provide fallback scroll helper for navigation links
      window.__lenis = {
        scrollTo: (target, opts = {}) => {
          const el = typeof target === 'string' ? document.querySelector(target) : target;
          if (el) {
            const top = typeof target === 'number' ? target : el.getBoundingClientRect().top + window.scrollY + (opts.offset || 0);
            window.scrollTo({ top, behavior: 'smooth' });
          } else if (typeof target === 'number') {
            window.scrollTo({ top: target, behavior: 'smooth' });
          }
        },
      };
      return () => {
        delete window.__lenis;
      };
    }

    // On desktop / trackpad / mouse devices: Responsive, snappy smooth scroll (no sluggish drag)
    const lenis = new Lenis({
      duration: 0.85, // Snappy & fast deceleration (reduced from slow 1.2s)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.25, // Natural scroll distance per wheel click (increased from 1.0)
      touchMultiplier: 1,
      syncTouch: false, // Never virtualize touch to prevent mobile drag lag
      prevent: (node) => {
        return (
          node?.hasAttribute?.('data-lenis-prevent') ||
          Boolean(node?.closest?.('[data-lenis-prevent]'))
        );
      },
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.__lenis = lenis;

    // Expose terminal toggle globally for CommandPalette
    window.__openTerminal = () => setIsTerminalOpen(true);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // High-performance ambient cursor spotlight without React re-renders
  useEffect(() => {
    const spotlight = document.getElementById('ambient-spotlight');
    if (!spotlight) return;

    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        spotlight.style.opacity = '1';
        spotlight.style.background = `radial-gradient(650px circle at ${e.clientX}px ${e.clientY}px, rgba(255, 42, 42, 0.08), transparent 80%)`;
      });
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Zero-layout-thrash section observer (runs off-main-thread via browser IntersectionObserver)
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'featured-project', 'projects', 'hackathons', 'experience', 'contact'];
    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
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
        if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
      }, 300);
    }

    return () => observer.disconnect();
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden transition-colors duration-300">
      {/* Lusion-Style Custom Reactive Fluid Cursor */}
      <CustomCursor />

      {/* Filmic Tactile Noise / Grain Texture */}
      <NoiseOverlay />

      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Interactive Ambient Cyber Particles Canvas */}
      <ParticlesBackground />

      {/* High-performance Cursor Ambient Spotlight (0 React re-renders) */}
      <div
        id="ambient-spotlight"
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block opacity-0"
      />

      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />
      <main className="relative z-20">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Hackathons />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ChatBot />

      {/* Global Hacker Terminal (` / backtick key) */}
      <HackerTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Global Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
        onToggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onOpenChat={() => window.__openChat?.()}
      />

      {/* 30-Second Recruiter Fast-Track Executive Modal */}
      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />
    </div>
  );
}
