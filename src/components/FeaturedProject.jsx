import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECT } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import BorderBeam from './common/BorderBeam';
import MagneticButton from './common/MagneticButton';
import TextShimmer from './common/TextShimmer';

export default function FeaturedProject() {
  return (
    <section id="featured-project" className="relative py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          FLAGSHIP
        </h2>
      </div>

      {/* Ambient Red Radial Background */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] red-radial-glow blur-3xl pointer-events-none -z-0 opacity-30 dark:opacity-40" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FEATURED_PROJECT.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              <TextShimmer>{FEATURED_PROJECT.title}</TextShimmer>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light max-w-2xl">
              {FEATURED_PROJECT.tagline}
            </p>
          </div>

          {/* Action Links with Magnetic Physics */}
          <div className="flex items-center space-x-3">
            <MagneticButton strength={0.3}>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={FEATURED_PROJECT.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#FF2A2A] text-white text-xs sm:text-sm font-semibold shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:bg-[#ff3b3b] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] transition-all duration-300 cursor-pointer"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={FEATURED_PROJECT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-black/60 border border-black/10 dark:border-white/20 text-gray-800 dark:text-white text-xs sm:text-sm font-medium hover:border-[#FF2A2A] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Repository</span>
              </motion.a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Feature Showcase Card with 3D Tilt & Animated Border Beam */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard
            maxTilt={4}
            scale={1.008}
            glare={true}
            glareOpacity={0.08}
            className="rounded-3xl border border-black/10 dark:border-white/15 bg-gray-50/80 dark:bg-[#0b0b0b] overflow-hidden shadow-xl dark:shadow-2xl p-6 sm:p-10 space-y-10 transition-colors duration-500 group relative"
          >
            {/* Magic UI Animated Border Beam */}
            <BorderBeam duration={11} borderWidth={1.5} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Left: Graphic Preview with Multi-Layer 3D Depth */}
              <div
                className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-black group/img relative shadow-xl"
                style={{ transform: 'translateZ(18px)' }}
              >
                <img
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.title}
                  className="w-full h-auto object-cover group-hover/img:scale-104 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/15 text-xs text-gray-700 dark:text-gray-300 shadow-lg">
                  <span className="font-semibold text-gray-950 dark:text-white">Startup Recognition:</span> {FEATURED_PROJECT.recognition}
                </div>
              </div>

              {/* Right: Overview & Core Features */}
              <div className="lg:col-span-5 space-y-6" style={{ transform: 'translateZ(14px)' }}>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                    Intelligent Telemedicine & AI Diagnostics
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed">
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
                      <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-gray-700 dark:text-gray-300 leading-snug">
                        <CheckCircle className="w-4 h-4 text-[#FF2A2A] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Badges with Micro-Interactions */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {FEATURED_PROJECT.tags.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.08 }}
                      className="px-2.5 py-1 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 text-[11px] font-mono text-gray-700 dark:text-gray-300 hover:border-[#FF2A2A]/40 hover:text-[#FF2A2A] dark:hover:text-white transition-colors cursor-default shadow-xs"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Pipeline Flow with Step Nodes */}
            <div className="border-t border-black/10 dark:border-white/10 pt-8 space-y-4" style={{ transform: 'translateZ(16px)' }}>
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-600 dark:text-gray-400 font-semibold flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF2A2A]" />
                  <span>End-to-End AI Voice & Clinical Architecture Pipeline</span>
                </h4>
                <span className="text-[10px] font-mono text-[#FF2A2A] hidden sm:inline">5-Stage Autonomous Pipeline</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
                {FEATURED_PROJECT.architecture.map((node, nIdx) => (
                  <motion.div
                    key={node.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: nIdx * 0.08 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#070707] space-y-1 relative group/node transition-all duration-300 cursor-default shadow-sm hover:border-[#FF2A2A]/50 hover:shadow-[0_8px_25px_-5px_rgba(255,42,42,0.2)]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#FF2A2A] px-1.5 py-0.5 rounded bg-[#FF2A2A]/10">
                        STEP 0{node.step}
                      </span>
                      {nIdx < FEATURED_PROJECT.architecture.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-gray-400 dark:text-gray-600 hidden md:block group-hover/node:text-[#FF2A2A] transition-colors" />
                      )}
                    </div>
                    <div className="text-xs font-bold text-gray-950 dark:text-white group-hover/node:text-[#FF2A2A] transition-colors pt-1">
                      {node.title}
                    </div>
                    <div className="text-[11px] text-gray-600 dark:text-gray-400 font-light leading-snug">
                      {node.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
