import React from 'react';

/**
 * HeroSubtleRing Component
 * ----------------------------------------------------------------------
 * Ultra-minimalist, elegant elliptical accent ring.
 * Positioned behind the portrait (z-index 5) at low opacity to provide
 * high-end architectural polish without visual noise or neon distractions.
 * ----------------------------------------------------------------------
 */
export default function HeroSubtleRing({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-[5] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 800"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="subtle-ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.4" />
            <stop offset="45%" stopColor="#FF2A2A" stopOpacity="0.08" />
            <stop offset="80%" stopColor="#FF2A2A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF2A2A" stopOpacity="0.1" />
          </linearGradient>

          <filter id="soft-ring-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Single elegant, thin orbital ellipse (1px stroke) */}
        <ellipse
          cx="350"
          cy="440"
          rx="310"
          ry="92"
          transform="rotate(-20 350 440)"
          stroke="url(#subtle-ring-grad)"
          strokeWidth="1.2"
          opacity="0.35"
        />

        {/* Subtle diffuse glow halo along the perimeter */}
        <ellipse
          cx="350"
          cy="440"
          rx="310"
          ry="92"
          transform="rotate(-20 350 440)"
          stroke="#FF2A2A"
          strokeWidth="3"
          opacity="0.08"
          filter="url(#soft-ring-blur)"
        />

        {/* Tiny subtle energy marker (1 tiny glowing node gliding along the ellipse) */}
        <circle r="2.2" fill="#ffffff" opacity="0.6">
          <animateMotion
            dur="22s"
            repeatCount="indefinite"
            path="M 53.3 579.9 A 320 100 -20 0 1 646.7 340.1 A 320 100 -20 0 1 53.3 579.9"
          />
        </circle>
      </svg>
    </div>
  );
}
