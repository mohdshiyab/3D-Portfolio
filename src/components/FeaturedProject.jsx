import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle, ShieldCheck, Activity, Video } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Ambient Red Radial Background */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] red-radial-glow blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FEATURED_PROJECT.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {FEATURED_PROJECT.title}
            </h2>
            <p className="text-sm text-gray-400 font-light max-w-2xl">
              {FEATURED_PROJECT.tagline}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex items-center space-x-3">
            <a
              href={FEATURED_PROJECT.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:bg-[#ff3b3b] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] transition-all"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={FEATURED_PROJECT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-black/60 border border-white/20 text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Repository</span>
            </a>
          </div>
        </div>

        {/* Feature Showcase Card */}
        <div className="rounded-3xl border border-white/15 bg-[#0b0b0b] overflow-hidden shadow-2xl p-6 sm:p-10 space-y-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Graphic Preview */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 bg-black group relative">
              <img
                src={FEATURED_PROJECT.image}
                alt={FEATURED_PROJECT.title}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                <span className="font-semibold text-white">Startup Recognition:</span> {FEATURED_PROJECT.recognition}
              </div>
            </div>

            {/* Right: Overview & Core Features */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Intelligent Telemedicine & AI Diagnostics
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                  {FEATURED_PROJECT.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF2A2A] font-semibold">
                  Key System Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {FEATURED_PROJECT.keyFeatures.slice(0, 5).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-300 leading-snug">
                      <CheckCircle className="w-4 h-4 text-[#FF2A2A] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {FEATURED_PROJECT.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[11px] font-mono text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="border-t border-white/10 pt-8 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold">
              End-to-End AI Voice & Clinical Architecture Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
              {FEATURED_PROJECT.architecture.map((node) => (
                <div
                  key={node.step}
                  className="p-4 rounded-xl border border-white/10 bg-[#070707] space-y-1 relative group hover:border-[#FF2A2A]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#FF2A2A]">STEP 0{node.step}</span>
                  </div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                    {node.title}
                  </div>
                  <div className="text-[11px] text-gray-400 font-light leading-snug">
                    {node.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
