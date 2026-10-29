import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X, Sparkles, Layers } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import MagneticButton from './common/MagneticButton';
import MaskedReveal from './common/MaskedReveal';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'AI & Tools', 'Web3 & Cloud'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white flex flex-col justify-center overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          PROJECTS
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-3 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-2">
            <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
              <Layers className="w-3.5 h-3.5" />
              <span>Featured Engineering</span>
            </div>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest hidden sm:inline">[ 04 // PRODUCTION ARCHIVE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-950 dark:text-white flex items-center justify-center gap-x-3">
            <MaskedReveal>Selected</MaskedReveal>
            <MaskedReveal delay={0.08}>
              <span className="text-[#FF2A2A] drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]">Projects</span>
            </MaskedReveal>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
            Production-ready web applications, real-time communication systems, Web3 contracts, and algorithmic trading tools.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Filter Tabs with Smooth Micro-Interaction */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#FF2A2A] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : 'bg-gray-100 dark:bg-[#0e0e0e] border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-400 hover:text-[#FF2A2A] dark:hover:text-white hover:border-[#FF2A2A]/40'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Project Grid with 3D Tilt Cards & Staggered Reveal */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="flex"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.15}
                  className="w-full rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0c0c0c] p-5 flex flex-col justify-between space-y-4 hover:border-[#FF2A2A]/50 transition-colors duration-300 group shadow-md dark:shadow-xl"
                >
                  {/* Thumbnail with 3D Depth Layer & Lusion Context Cursor */}
                  <div
                    data-cursor="view"
                    onClick={() => setSelectedProject(project)}
                    className="w-full h-44 rounded-xl overflow-hidden bg-gray-200 dark:bg-black/80 relative cursor-pointer shadow-inner"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-white/20 text-xs font-medium text-white backdrop-blur-sm shadow-lg">
                        View Details
                      </span>
                    </div>

                    {/* Category floating chip with high 3D pop */}
                    <div
                      className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-[#FF2A2A] font-bold uppercase tracking-wider"
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Text Information */}
                  <div className="space-y-2 flex-1 flex flex-col justify-between" style={{ transform: 'translateZ(12px)' }}>
                    <div>
                      <h3 className="text-lg font-bold text-gray-950 dark:text-white group-hover:text-[#FF2A2A] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-light line-clamp-3 leading-relaxed mt-1">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags with Micro-Interactions */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          whileHover={{ scale: 1.08 }}
                          className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[10px] font-mono text-gray-700 dark:text-gray-300 cursor-default shadow-xs"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-white dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-[10px] font-mono text-gray-500 dark:text-gray-400 cursor-default">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons with 3D Depth & Magnetic Physics */}
                  <div
                    className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between"
                    style={{ transform: 'translateZ(15px)' }}
                  >
                    <MagneticButton strength={0.25}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-[#FF2A2A] transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    </MagneticButton>
                    
                    <MagneticButton strength={0.25}>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-gray-900 dark:text-white hover:text-[#FF2A2A] transition-colors cursor-pointer"
                      >
                        <span>Quick View</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </MagneticButton>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Dialog for Project Details */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto overscroll-contain"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-2xl w-full rounded-2xl border border-black/10 dark:border-white/20 bg-white dark:bg-[#0d0d0d] p-6 sm:p-8 space-y-6 shadow-2xl text-gray-900 dark:text-white"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-full border border-black/10 dark:border-white/10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 h-56 sm:h-64 bg-gray-100 dark:bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FF2A2A] uppercase font-semibold">
                      {selectedProject.category} · {selectedProject.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-950 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-gray-500 dark:text-gray-400">Technologies Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg border border-black/10 dark:border-white/15 bg-gray-100 dark:bg-white/5 text-xs font-mono text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-end space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] text-white text-xs font-semibold shadow-[0_0_15px_rgba(255,42,42,0.4)]"
                  >
                    <Github className="w-4 h-4" />
                    <span>Open GitHub Repository</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
