import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Code2, Sparkles, FolderGit2, Trophy, Mail } from 'lucide-react';

const DOCK_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'featured-project', label: 'Flagship', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'hackathons', label: 'Honors', icon: Trophy },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function FloatingDock({ activeSection = 'home' }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 dark:bg-[#0c0c0c]/80 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.3)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.7)]"
      >
        {DOCK_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredIdx === idx;

          return (
            <div key={item.id} className="relative">
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: -30, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-full px-2.5 py-1 rounded-md bg-black/90 dark:bg-white text-white dark:text-black text-[11px] font-mono font-semibold pointer-events-none whitespace-nowrap shadow-md z-50"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dock Icon Button */}
              <motion.button
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ scale: 1.25, y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className={`relative p-2.5 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'bg-[#FF2A2A] text-white shadow-[0_0_15px_rgba(255,42,42,0.6)]'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4" />
                {isActive && (
                  <motion.span
                    layoutId="active-dock-indicator"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-white dark:bg-[#FF2A2A]"
                  />
                )}
              </motion.button>
            </div>
          );
        })}
      </motion.nav>
    </div>
  );
}
