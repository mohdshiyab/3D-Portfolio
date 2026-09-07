import React, { useState, useEffect } from 'react';

/**
 * Cinematic 3-second Initializing Portfolio loading screen.
 * Features an animated cyber emblem, dynamic boot status messages,
 * smooth 0% -> 100% progress bar, and a sleek fade-out transition.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Loading system core & components...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();
    const duration = 3000; // Exactly 3 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 28) {
        setStatusText('Loading system core & components...');
      } else if (pct < 58) {
        setStatusText('Mounting full-stack architectures...');
      } else if (pct < 88) {
        setStatusText('Initializing AI models & WebRTC nodes...');
      } else {
        setStatusText('Ready. Welcome to Mohammad Shiyabuddeen.');
      }

      if (elapsed >= duration) {
        clearInterval(interval);
        setIsFading(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        }, 600); // Smooth 600ms exit fade
      }
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center px-4 select-none transition-all duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 scale-100'
      }`}
      aria-hidden={isFading}
    >
      {/* Glowing Ambient Background Spotlights */}
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#FF2A2A]/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Center Console */}
      <div className="relative z-10 w-full max-w-sm mx-auto space-y-7 text-center">
        
        {/* Animated Cyber Emblem */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
          {/* Rotating dashed ring */}
          <div className="absolute inset-0 rounded-2xl border border-dashed border-[#FF2A2A]/50 animate-[spin_10s_linear_infinite]" />
          {/* Glowing pulse ring */}
          <div className="absolute inset-1.5 rounded-xl border border-[#FF2A2A]/30 animate-ping opacity-30" />
          
          {/* Core Monogram Card */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#1c0808] to-[#0a0a0a] border border-[#FF2A2A]/60 flex items-center justify-center shadow-[0_0_35px_rgba(255,42,42,0.45)]">
            <span className="font-display font-black text-xl text-white tracking-wider">
              MS<span className="text-[#FF2A2A]">.</span>
            </span>
          </div>
        </div>

        {/* Text & Status */}
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#FF2A2A]/40 bg-[#FF2A2A]/10 text-[11px] font-mono font-semibold tracking-widest text-[#FF2A2A] uppercase shadow-[0_0_15px_rgba(255,42,42,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A] animate-ping" />
            <span>Initializing Portfolio</span>
          </div>
          
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Mohammad Shiyabuddeen
          </h1>
          
          <p className="text-xs font-mono text-gray-400 h-5 transition-all">
            {statusText}
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="space-y-2 max-w-xs mx-auto pt-2">
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-[#FF2A2A]/70 via-[#FF2A2A] to-white rounded-full shadow-[0_0_15px_#FF2A2A] transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
            <span>SYS_INIT_SEQUENCE</span>
            <span className="text-[#FF2A2A] font-semibold">{progress}%</span>
          </div>
        </div>

      </div>
    </div>
  );
}
