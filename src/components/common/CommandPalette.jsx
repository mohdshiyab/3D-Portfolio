import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Sparkles, 
  Download, 
  Copy, 
  CheckCircle2, 
  Layers, 
  Trophy, 
  Briefcase, 
  Mail, 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  ExternalLink,
  MessageCircle,
  Home,
  User,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS_LIST } from '../../data/portfolioData';
import { playClick, playSuccess, playPop, isSoundEnabled, setSoundEnabled } from '../../utils/soundEffects';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onOpenRecruiter, 
  onToggleTheme, 
  isDarkMode,
  onOpenChat,
  onSelectProject
}) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const inputRef = useRef(null);
  const listRef = useRef(null);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open palette
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle focus, pop sound, and escape key
  useEffect(() => {
    if (isOpen) {
      playPop();
      setQuery('');
      setSelectedIndex(0);
      setSoundOn(isSoundEnabled());
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';

      const handleKey = (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
        }
      };
      window.addEventListener('keydown', handleKey);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKey);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  // Navigate to section
  const navigateTo = (sectionId) => {
    playClick();
    onClose();
    const elem = document.getElementById(sectionId);
    if (elem) {
      if (window.__lenis) {
        window.__lenis.scrollTo(elem, { offset: -20, duration: 1.2 });
      } else {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const copyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadResume = () => {
    playSuccess();
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumeUrl;
    link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  const toggleSound = () => {
    const next = !soundOn;
    setSoundEnabled(next);
    setSoundOn(next);
    if (next) playSuccess();
  };

  // Compile list of available actions
  const allActions = useMemo(() => {
    const list = [
      // Core Actions
      {
        id: 'recruiter',
        title: '30-Second Recruiter Fast-Track',
        subtitle: 'Executive summary with key achievements, verified degree & metrics',
        category: 'Quick Actions',
        icon: Sparkles,
        badge: 'Recommended',
        perform: () => {
          onClose();
          onOpenRecruiter?.();
        },
      },
      {
        id: 'resume',
        title: 'Download Official Résumé',
        subtitle: 'PDF copy with Stellapps data engineering & full-stack experience',
        category: 'Quick Actions',
        icon: Download,
        badge: 'PDF',
        perform: downloadResume,
      },
      {
        id: 'copy-email',
        title: copied ? 'Email Copied to Clipboard!' : 'Copy Email Address',
        subtitle: PERSONAL_INFO.email,
        category: 'Quick Actions',
        icon: copied ? CheckCircle2 : Copy,
        perform: copyEmail,
      },
      {
        id: 'toggle-sound',
        title: soundOn ? 'Mute Tactile Audio FX' : 'Enable Tactile Audio FX',
        subtitle: soundOn ? 'Sound feedback is currently ON' : 'Turn on synthesized mechanical clicks',
        category: 'Quick Actions',
        icon: soundOn ? VolumeX : Volume2,
        perform: toggleSound,
      },
      {
        id: 'toggle-theme',
        title: isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme',
        subtitle: `Currently in ${isDarkMode ? 'Dark' : 'Light'} mode`,
        category: 'Quick Actions',
        icon: isDarkMode ? Sun : Moon,
        perform: () => {
          playClick();
          onToggleTheme?.();
        },
      },
      {
        id: 'open-chat',
        title: 'Ask Portfolio AI Assistant',
        subtitle: 'Interactive live chat powered by Google Gemini',
        category: 'Quick Actions',
        icon: MessageCircle,
        badge: 'AI',
        perform: () => {
          onClose();
          onOpenChat?.();
        },
      },

      // Section Navigation
      {
        id: 'nav-home',
        title: 'Jump to Hero Overview',
        subtitle: 'Introduction, 3D typography, and metrics',
        category: 'Navigation',
        icon: Home,
        perform: () => navigateTo('home'),
      },
      {
        id: 'nav-about',
        title: 'Jump to Principles & Bento Matrix',
        subtitle: 'Engineering principles, location matrix, and stats',
        category: 'Navigation',
        icon: User,
        perform: () => navigateTo('about'),
      },
      {
        id: 'nav-skills',
        title: 'Jump to Technical Proficiencies',
        subtitle: 'Languages, frameworks, databases, and tools',
        category: 'Navigation',
        icon: Cpu,
        perform: () => navigateTo('skills'),
      },
      {
        id: 'nav-projects',
        title: 'Jump to Selected Projects',
        subtitle: 'Production web apps, Web3, and algorithmic tools',
        category: 'Navigation',
        icon: Layers,
        perform: () => navigateTo('projects'),
      },
      {
        id: 'nav-hackathons',
        title: 'Jump to Hackathons & Honors',
        subtitle: 'Srinathon 2025 Double First Prize and official proof',
        category: 'Navigation',
        icon: Trophy,
        perform: () => navigateTo('hackathons'),
      },
      {
        id: 'nav-experience',
        title: 'Jump to Experience & Trajectory',
        subtitle: 'Stellapps data engineering, SuprMentr, and education',
        category: 'Navigation',
        icon: Briefcase,
        perform: () => navigateTo('experience'),
      },
      {
        id: 'nav-contact',
        title: 'Jump to Contact Section',
        subtitle: 'Send a message or find direct links',
        category: 'Navigation',
        icon: Mail,
        perform: () => navigateTo('contact'),
      },
    ];

    // Project entries
    PROJECTS_LIST.forEach((p) => {
      list.push({
        id: `proj-${p.id}`,
        title: p.title,
        subtitle: `${p.category} · ${p.tags.slice(0, 3).join(', ')}`,
        category: 'Projects',
        icon: Layers,
        perform: () => {
          onClose();
          if (onSelectProject) {
            onSelectProject(p);
          } else {
            navigateTo('projects');
          }
        },
      });
    });

    // Social Links
    list.push(
      {
        id: 'social-gh',
        title: 'Open GitHub Profile',
        subtitle: 'github.com/mohdshiyab',
        category: 'External Links',
        icon: ExternalLink,
        perform: () => {
          playClick();
          window.open(PERSONAL_INFO.socials.github, '_blank', 'noopener,noreferrer');
        },
      },
      {
        id: 'social-li',
        title: 'Open LinkedIn Profile',
        subtitle: 'linkedin.com/in/mohammad-shiyabuddeen-4b183724b',
        category: 'External Links',
        icon: ExternalLink,
        perform: () => {
          playClick();
          window.open(PERSONAL_INFO.socials.linkedin, '_blank', 'noopener,noreferrer');
        },
      }
    );

    return list;
  }, [copied, soundOn, isDarkMode, onOpenRecruiter, onToggleTheme, onOpenChat, onSelectProject]);

  // Filter actions based on query
  const filtered = useMemo(() => {
    if (!query.trim()) return allActions;
    const q = query.toLowerCase();
    return allActions.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle?.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)
    );
  }, [allActions, query]);

  // Keyboard navigation within list (ArrowUp, ArrowDown, Enter)
  const handleKeyDownList = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      playClick(500, 0.02);
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      playClick(500, 0.02);
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].perform();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        onClick={onClose}
        className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 pt-16 sm:pt-24 overflow-y-auto overscroll-contain animate-in fade-in duration-200"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/15 bg-white dark:bg-[#0e0e0e] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center space-x-3 px-4 sm:px-5 py-4 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black/40">
            <Search className="w-5 h-5 text-[#FF2A2A] shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDownList}
              placeholder="Type a command, section, or project..."
              className="flex-1 bg-transparent border-0 outline-none text-sm sm:text-base font-sans text-gray-900 dark:text-white placeholder-gray-400"
            />
            {query ? (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-md text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono text-gray-400 border border-black/10 dark:border-white/10">
                ESC
              </span>
            )}
          </div>

          {/* Results List */}
          <div
            ref={listRef}
            className="max-h-[60vh] overflow-y-auto overscroll-contain p-2 space-y-1 divide-y divide-black/5 dark:divide-white/5"
          >
            {filtered.length === 0 ? (
              <div className="py-12 text-center space-y-2">
                <Search className="w-8 h-8 text-gray-400 mx-auto opacity-50" />
                <p className="text-sm text-gray-500 font-mono">No matching actions found for "{query}"</p>
              </div>
            ) : (
              filtered.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;

                return (
                  <div
                    key={item.id}
                    data-active={isSelected ? 'true' : 'false'}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    onClick={() => item.perform()}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#FF2A2A] text-white shadow-md'
                        : 'text-gray-800 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3 min-w-0">
                      <div
                        className={`p-2 rounded-lg shrink-0 ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-black/5 dark:bg-white/5 text-[#FF2A2A]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-semibold truncate">{item.title}</span>
                          {item.badge && (
                            <span
                              className={`text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                                isSelected
                                  ? 'bg-white/30 text-white'
                                  : 'bg-[#FF2A2A]/20 text-[#FF2A2A]'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.subtitle && (
                          <p
                            className={`text-xs truncate font-light ${
                              isSelected ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                            }`}
                          >
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0 ml-3">
                      <span
                        className={`text-[10px] font-mono hidden sm:inline ${
                          isSelected ? 'text-white/70' : 'text-gray-400'
                        }`}
                      >
                        {item.category}
                      </span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isSelected ? 'translate-x-0.5 text-white' : 'text-gray-400 opacity-40'
                        }`}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Bottom Keyboard Legend */}
          <div className="px-4 py-2.5 border-t border-black/10 dark:border-white/10 bg-gray-50/70 dark:bg-black/50 flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center space-x-1">
                <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15">↵</kbd>
                <span>Select</span>
              </span>
            </div>
            <span className="hidden sm:inline">
              <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15">ESC</kbd> Close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
