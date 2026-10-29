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
import Lenis from 'lenis';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('theme') !== 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', !isDarkMode);
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Apple-grade Smooth Momentum / Inertia Scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.__lenis = lenis;

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

  // Throttled scroll listener using requestAnimationFrame to prevent layout thrashing
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'featured-project', 'projects', 'hackathons', 'experience', 'contact'];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 250;
          for (const s of sections) {
            const el = document.getElementById(s);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                setActiveSection((prev) => (prev === s ? prev : s));
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const params = new URLSearchParams(window.location.search);
    const targetSection = params.get('section');
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) window.scrollTo(0, el.offsetTop);
      }, 300);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden transition-colors duration-300">
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
    </div>
  );
}
