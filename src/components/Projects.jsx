import React, { useState } from 'react';
import { ExternalLink, Github, Layers, X } from 'lucide-react';
import { PROJECTS_LIST } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'AI & Tools', 'Web3 & Cloud'];

  const filteredProjects = activeTab === 'All'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-[#050505] flex flex-col justify-center overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-[#FF2A2A]">Projects</span>
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Production-ready web applications, real-time communication systems, Web3 contracts, and algorithmic trading tools.
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#FF2A2A] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)]'
                  : 'bg-[#0e0e0e] border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl border border-white/10 bg-[#0c0c0c] flex flex-col justify-between space-y-4 hover:border-[#FF2A2A]/50 transition-all duration-300 group hover:shadow-[0_10px_30px_-10px_rgba(255,42,42,0.2)]"
            >
              {/* Thumbnail */}
              <div
                onClick={() => setSelectedProject(project)}
                className="w-full h-44 rounded-xl overflow-hidden bg-black/80 relative cursor-pointer group-hover:scale-[1.02] transition-transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 text-xs font-medium text-white backdrop-blur-sm">
                    View Details
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#FF2A2A] uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF2A2A] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light line-clamp-3 leading-relaxed mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-gray-300 hover:text-[#FF2A2A] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-white hover:text-[#FF2A2A] transition-colors"
                >
                  <span>Quick Overview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog */}
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full rounded-2xl border border-white/20 bg-[#0d0d0d] p-6 sm:p-8 space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-xl overflow-hidden border border-white/10 h-56 sm:h-64 bg-black">
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
                <h3 className="text-2xl font-black text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-gray-400">Technologies Used:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg border border-white/15 bg-white/5 text-xs font-mono text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-end space-x-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] text-white text-xs font-semibold shadow-[0_0_15px_rgba(255,42,42,0.4)]"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
