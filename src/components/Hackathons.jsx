import React, { useState, useEffect } from 'react';
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
    <section id="hackathons" className="relative py-20 sm:py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 px-3 py-1 text-[11px] tracking-widest font-mono text-[#FF2A2A] uppercase rounded-md font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitive Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {HACKATHONS_DATA.headline}
          </h2>
          <p className="text-sm text-gray-400 font-light">
            {HACKATHONS_DATA.subheadline}
          </p>
          <div className="w-16 h-0.5 bg-[#FF2A2A]/60 mx-auto rounded-full mt-2" />
        </div>

        {/* Flagship Hackathon Double Victory Card */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e0e0e] to-[#070707] p-6 sm:p-10 shadow-2xl space-y-8 relative group">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FF2A2A] uppercase tracking-wider">
                {flagshipEvent.organizer}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {flagshipEvent.name} — Double First Prize
              </h3>
              <p className="text-xs text-gray-400 font-light">
                {flagshipEvent.scale} · Co-Led by Shiyab
              </p>
            </div>

            {/* Team Quote */}
            <div className="max-w-md p-4 rounded-xl border border-white/10 bg-black/40">
              <p className="text-xs italic text-gray-300 leading-relaxed font-light">
                "{flagshipEvent.quote}"
              </p>
            </div>
          </div>

          {/* Two Winning Themes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {flagshipEvent.wins.map((win, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] flex items-start space-x-4 hover:border-[#FF2A2A]/40 transition-colors"
              >
                <div className="p-3 rounded-xl bg-[#FF2A2A]/10 border border-[#FF2A2A]/30 text-[#FF2A2A] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FF2A2A] text-white font-bold inline-block shadow-[0_0_8px_#FF2A2A]">
                    {win.badge}
                  </span>
                  <h4 className="text-sm font-bold text-white pt-1">
                    {win.theme}
                  </h4>
                  <p className="text-xs text-gray-400 font-light">
                    Sponsor: {win.sponsor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate & Prize Photos Showcase with Enhanced Animation & Responsiveness */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FF2A2A]" />
                <span>Verification Proof & Official Documents:</span>
              </h4>
              <span className="text-[11px] font-mono text-gray-500 hidden sm:inline">
                Click any document to inspect
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {flagshipEvent.photos.map((item, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setActivePhotoIndex(pIdx)}
                  className="group/photo relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#111111] via-[#0b0b0b] to-[#060606] shadow-xl hover:shadow-[0_20px_50px_rgba(255,42,42,0.22)] hover:border-[#FF2A2A]/70 hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col select-none"
                >
                  {/* Diagonal Glass Sheen Reflection Animation */}
                  <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl sm:rounded-3xl">
                    <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent rotate-45 translate-x-[-120%] group-hover/photo:translate-x-[220%] transition-transform duration-1000 ease-out" />
                  </div>

                  {/* Document Viewport Frame with Responsive Heights */}
                  <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[420px] bg-black/85 flex items-center justify-center overflow-hidden">
                    {/* Live Breathing Ambient Backlight */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img
                        src={item.img}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover blur-3xl opacity-20 scale-110 group-hover/photo:opacity-40 group-hover/photo:scale-130 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70" />
                    </div>

                    {/* Uncropped Document with Gentle Scale & Drop Shadow */}
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="relative z-10 max-h-full max-w-full object-contain p-3 sm:p-5 transition-transform duration-700 ease-out group-hover/photo:scale-[1.03] drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
                    />

                    {/* Top-Left Verified Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 border border-[#FF2A2A]/40 backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold text-[#FF2A2A] flex items-center space-x-1.5 shadow-md group-hover/photo:border-[#FF2A2A] group-hover/photo:bg-[#FF2A2A]/20 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-ping" />
                      <CheckCircle2 className="w-3 h-3 text-[#FF2A2A]" />
                      <span>Verified Proof</span>
                    </div>

                    {/* Top-Right Floating Zoom Pill */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 translate-y-1 sm:translate-y-2 opacity-90 sm:opacity-0 group-hover/photo:translate-y-0 group-hover/photo:opacity-100 transition-all duration-300 ease-out px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white flex items-center space-x-1.5 shadow-lg group-hover/photo:border-[#FF2A2A]/60 group-hover/photo:bg-[#FF2A2A] group-hover/photo:text-white">
                      <Maximize2 className="w-3 h-3 text-[#FF2A2A] group-hover/photo:text-white transition-colors" />
                      <span className="hidden sm:inline">Click to Zoom</span>
                      <span className="sm:hidden">Zoom</span>
                    </div>
                  </div>

                  {/* Refined Caption Bar with Animated Red Accent Line */}
                  <div className="relative z-10 p-3.5 sm:p-4 bg-[#0a0a0a]/95 backdrop-blur-sm border-t border-white/10 flex flex-col items-center justify-center space-y-1.5 transition-colors group-hover/photo:bg-[#121212]">
                    <div className="text-xs sm:text-sm font-semibold text-gray-200 group-hover/photo:text-white transition-colors text-center line-clamp-1">
                      {item.caption}
                    </div>
                    <div className="w-8 group-hover/photo:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FF2A2A] to-transparent rounded-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {otherHonors.map((honor, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-white/10 bg-[#0c0c0c] space-y-3 hover:border-[#FF2A2A]/50 hover:bg-[#101010] hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF2A2A] group-hover:scale-110 group-hover:bg-[#FF2A2A] group-hover:text-white transition-all duration-300">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white group-hover:text-[#FF2A2A] transition-colors">
                {honor.title}
              </h4>
              <p className="text-xs font-mono text-gray-400">
                {honor.event} · {honor.org}
              </p>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                {honor.desc}
              </p>
            </div>
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
