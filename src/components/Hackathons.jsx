import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Flame, 
  Users, 
  Calendar, 
  ArrowRight, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { HACKATHONS_DATA } from '../data/portfolioData';
import TiltCard from './common/TiltCard';
import BorderBeam from './common/BorderBeam';

export default function Hackathons() {
  const { flagshipEvent, otherHonors } = HACKATHONS_DATA;
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  // Keyboard navigation & body scroll lock for modal
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setActivePhotoIndex(null);
        } else if (e.key === 'ArrowRight') {
          setActivePhotoIndex((prev) => (prev + 1) % flagshipEvent.photos.length);
        } else if (e.key === 'ArrowLeft') {
          setActivePhotoIndex((prev) => (prev - 1 + flagshipEvent.photos.length) % flagshipEvent.photos.length);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [activePhotoIndex, flagshipEvent.photos.length]);

  return (
    <section id="hackathons" className="relative py-20 sm:py-24 bg-white dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 select-none z-0 pointer-events-none opacity-20 dark:opacity-30">
        <h2 className="text-[6rem] sm:text-[9rem] lg:text-[13rem] font-display font-black text-outline-red tracking-tighter leading-none uppercase">
          HONORS
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitive Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {HACKATHONS_DATA.headline}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
            {HACKATHONS_DATA.subheadline}
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </motion.div>

        {/* Flagship Hackathon Double Victory Card with Animated Border Beam */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-black/10 dark:border-white/15 bg-gray-50/80 dark:bg-gradient-to-b dark:from-[#0e0e0e] dark:to-[#070707] p-6 sm:p-10 shadow-xl space-y-8 relative group overflow-hidden"
        >
          {/* Magic UI Animated Border Beam */}
          <BorderBeam duration={10} borderWidth={1.5} />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/10 dark:border-white/10">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FF2A2A] uppercase tracking-wider">
                {flagshipEvent.organizer}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 dark:text-white">
                {flagshipEvent.name} — <span className="text-[#FF2A2A] drop-shadow-[0_0_12px_rgba(255,42,42,0.4)]">Double First Prize</span>
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-light">
                {flagshipEvent.scale} · Co-Led by Shiyab
              </p>
            </div>

            {/* Team Quote */}
            <div className="max-w-md p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 shadow-sm">
              <p className="text-xs italic text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                "{flagshipEvent.quote}"
              </p>
            </div>
          </div>

          {/* Two Winning Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flagshipEvent.wins.map((win, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] flex items-start space-x-4 hover:border-[#FF2A2A]/40 transition-colors shadow-sm"
              >
                <div className="p-3 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF2A2A] text-white font-bold inline-block shadow-[0_0_8px_#FF2A2A]">
                    {win.badge}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white pt-1">
                    {win.theme}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
                    Sponsor: {win.sponsor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate & Prize Photos Showcase with 3D Tilt Cards */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase text-gray-600 dark:text-gray-400 tracking-wider flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
                <span>Verification Proof & Official Documents:</span>
              </h4>
              <span className="text-[11px] font-mono text-gray-500 hidden sm:inline">
                Click any document to inspect (3D Tilt Active)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-stretch">
              {flagshipEvent.photos.map((item, pIdx) => (
                <div key={pIdx} className="flex">
                  <TiltCard
                    maxTilt={8}
                    scale={1.02}
                    glare={true}
                    glareOpacity={0.2}
                    onClick={() => setActivePhotoIndex(pIdx)}
                    className="w-full group/photo rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/15 bg-white dark:bg-gradient-to-b dark:from-[#111111] dark:via-[#0b0b0b] dark:to-[#060606] shadow-xl hover:shadow-[0_20px_50px_rgba(255,42,42,0.22)] hover:border-[#FF2A2A]/70 transition-all duration-300 cursor-pointer flex flex-col select-none"
                  >
                    {/* Document Viewport Frame with Responsive Heights */}
                    <div
                      className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[420px] bg-gray-100 dark:bg-black/85 flex items-center justify-center overflow-hidden"
                      style={{ transform: 'translateZ(15px)' }}
                    >
                      {/* Ambient Backlight */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          src={item.img}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover blur-3xl opacity-20 scale-110 group-hover/photo:opacity-40 group-hover/photo:scale-130 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 via-transparent to-transparent dark:from-black dark:via-black/30 dark:to-black/70" />
                      </div>

                      {/* Uncropped Document with Scale */}
                      <img
                        src={item.img}
                        alt={item.caption}
                        className="relative z-10 max-h-full max-w-full object-contain p-3 sm:p-5 transition-transform duration-700 ease-out group-hover/photo:scale-[1.03] drop-shadow-[0_12px_28px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
                      />

                      {/* Top-Left Verified Badge */}
                      <div
                        className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 dark:bg-black/75 border border-[#FF2A2A]/40 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold text-[#FF2A2A] flex items-center space-x-1.5 shadow-md group-hover/photo:border-[#FF2A2A] group-hover/photo:bg-[#FF2A2A]/20 transition-all duration-300"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-ping" />
                        <CheckCircle2 className="w-3 h-3 text-[#FF2A2A]" />
                        <span>Verified Proof</span>
                      </div>

                      {/* Top-Right Floating Zoom Pill */}
                      <div
                        className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 translate-y-1 sm:translate-y-2 opacity-90 sm:opacity-0 group-hover/photo:translate-y-0 group-hover/photo:opacity-100 transition-all duration-300 ease-out px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 dark:bg-black/85 backdrop-blur-md border border-black/10 dark:border-white/20 text-[10px] sm:text-xs font-semibold text-gray-800 dark:text-white flex items-center space-x-1.5 shadow-lg group-hover/photo:border-[#FF2A2A]/60 group-hover/photo:bg-[#FF2A2A] group-hover/photo:text-white"
                        style={{ transform: 'translateZ(25px)' }}
                      >
                        <Maximize2 className="w-3 h-3 text-[#FF2A2A] group-hover/photo:text-white transition-colors" />
                        <span className="hidden sm:inline">Click to Zoom</span>
                        <span className="sm:hidden">Zoom</span>
                      </div>
                    </div>

                    {/* Refined Caption Bar */}
                    <div
                      className="relative z-10 p-3.5 sm:p-4 bg-white dark:bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-black/5 dark:border-white/10 flex flex-col items-center justify-center space-y-1.5 transition-colors group-hover/photo:bg-gray-50 dark:group-hover/photo:bg-[#121212]"
                      style={{ transform: 'translateZ(18px)' }}
                    >
                      <div className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover/photo:text-[#FF2A2A] dark:group-hover/photo:text-white transition-colors text-center line-clamp-1">
                        {item.caption}
                      </div>
                      <div className="w-8 group-hover/photo:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent rounded-full transition-all duration-500" />
                    </div>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Other Honors Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {otherHonors.map((honor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <TiltCard
                maxTilt={8}
                scale={1.02}
                glare={true}
                glareOpacity={0.12}
                className="w-full p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gray-50/80 dark:bg-[#0c0c0c] flex flex-col justify-between space-y-4 hover:border-[#FF2A2A]/50 transition-colors duration-300 group shadow-md dark:shadow-lg cursor-default"
              >
                <div className="space-y-3" style={{ transform: 'translateZ(15px)' }}>
                  <div className="w-10 h-10 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 flex items-center justify-center text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-gray-950 dark:text-white group-hover:text-[#FF2A2A] transition-colors">
                    {honor.title}
                  </h4>
                  <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                    {honor.event} · {honor.org}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                    {honor.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Zoom Modal with Carousel, Keyboard & Smooth Animations */}
      {activePhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 transition-all duration-300 animate-in fade-in"
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Modal Content Container */}
          <div
            className="relative max-w-5xl w-full max-h-[96vh] flex flex-col items-center animate-in zoom-in-95 duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Document Counter & Close Button */}
            <div className="w-full flex items-center justify-between pb-3 px-2 text-white">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse shadow-[0_0_8px_#FF2A2A]" />
                <span className="text-xs sm:text-sm font-mono text-gray-300 font-semibold tracking-wider uppercase">
                  Document {activePhotoIndex + 1} of {flagshipEvent.photos.length}
                </span>
              </div>

              {/* Close Button with Spin Animation */}
              <button
                onClick={() => setActivePhotoIndex(null)}
                className="p-2 sm:p-2.5 rounded-full bg-white/10 text-white hover:bg-[#FF2A2A] hover:rotate-90 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg border border-white/15"
                aria-label="Close Preview (or press Esc)"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Document Frame */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 bg-black shadow-2xl p-2 sm:p-4 flex items-center justify-center max-h-[72vh] sm:max-h-[78vh]">
              {/* Ambient Glow behind document in modal */}
              <img
                src={flagshipEvent.photos[activePhotoIndex].img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-25 scale-125 pointer-events-none"
              />

              {/* Full Image */}
              <img
                key={activePhotoIndex}
                src={flagshipEvent.photos[activePhotoIndex].img}
                alt={flagshipEvent.photos[activePhotoIndex].caption}
                className="relative z-10 max-h-[66vh] sm:max-h-[74vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              />

              {/* Carousel Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev - 1 + flagshipEvent.photos.length) % flagshipEvent.photos.length);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
                aria-label="Previous Document"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              {/* Carousel Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) => (prev + 1) % flagshipEvent.photos.length);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-black/75 border border-white/20 text-white hover:bg-[#FF2A2A] hover:border-[#FF2A2A] hover:scale-110 transition-all duration-300 shadow-xl cursor-pointer"
                aria-label="Next Document"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Caption & Dot Navigation */}
            <div className="mt-3 flex flex-col items-center space-y-2">
              <p className="text-xs sm:text-sm text-gray-200 font-medium text-center px-4">
                {flagshipEvent.photos[activePhotoIndex].caption}
              </p>
              
              {/* Carousel Indicator Dots */}
              <div className="flex items-center space-x-2 pt-1">
                {flagshipEvent.photos.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActivePhotoIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === activePhotoIndex
                        ? 'w-6 bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A]'
                        : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`View document ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
