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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isPointerInside, setIsPointerInside] = useState(false);
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

  // Ambient mouse spotlight tracker
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isPointerInside) setIsPointerInside(true);
    };

    const handleMouseLeave = () => {
      setIsPointerInside(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isPointerInside]);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'featured-project', 'projects', 'hackathons', 'experience', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden">
      {/* Interactive Cursor Ambient Glow Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
        style={{
          opacity: isPointerInside ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 42, 42, 0.08), transparent 80%)`,
        }}
      />

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      <main>
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
