import React from 'react';
import { Award, Zap, Code2, CheckCircle2, Download, ArrowRight } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-[#050505] flex items-center overflow-hidden border-t border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-40">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          ABOUT
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            Engineering Principles & Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Architecting Scalable <span className="text-[#FF2A2A]">Web & AI Systems</span>
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-2xl">
            Passionate full-stack developer committed to craft, performance, and user-first digital products.
          </p>
        </div>

        {/* Main Grid: Left Workspace Photo & Quote, Right Story & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Workspace Shot with books & posters */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
              <img
                src={ABOUT_DATA.workspacePhoto}
                alt="Shiyab Developer Workspace"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              
              {/* Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border-white/15">
                <p className="font-script text-xl sm:text-2xl text-white tracking-wide leading-snug">
                  "{ABOUT_DATA.quote}"
                </p>
                <span className="text-[11px] font-mono text-[#FF2A2A] font-semibold mt-1 block">
                  — Mohammad Shiyabuddeen
                </span>
              </div>
            </div>
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF2A2A]/20 to-transparent rounded-3xl blur-2xl -z-10 group-hover:from-[#FF2A2A]/35 transition-colors" />
          </div>

          {/* Right Column: Bio Narrative, Proven Impact, Metrics */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {ABOUT_DATA.story.map((paragraph, idx) => (
                <p key={idx} className="tracking-wide">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metric Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {ABOUT_DATA.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-white/10 bg-[#0c0c0c] space-y-1 hover:border-[#FF2A2A]/40 transition-all group"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-[#FF2A2A] transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-200">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-gray-400 font-light leading-tight">
                    {metric.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = PERSONAL_INFO.resumeUrl;
                  link.download = 'Mohammad_Shiyabuddeen_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/20 text-white text-xs sm:text-sm font-semibold hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/15 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-[#FF2A2A]" />
                <span>Download Official Resume</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center space-x-1.5 text-xs sm:text-sm text-gray-300 hover:text-[#FF2A2A] transition-colors font-medium"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
