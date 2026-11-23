import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Code2 } from 'lucide-react';

/**
 * HeroOrbitalRings Component
 * --------------------------------------------------------------------------------
 * Recreates the futuristic neon laser orbital rings and floating tech badges
 * seen in the reference design.
 *
 * Architecture:
 * - Back Arcs Layer: Renders behind the portrait body (z-index 5)
 * - Front Arcs Layer: Renders in front of the torso/arm (z-index 15)
 *   -> Produces authentic, volumetric 3D occlusion wrapping around the person!
 * - Floating Technology Badges: React, Node.js, MongoDB, Full-Stack Dev
 *   -> Float independently with sine wave physics and react to cursor parallax.
 * --------------------------------------------------------------------------------
 */

// Custom SVG Icons for React, Node.js, MongoDB
function ReactIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NodeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.5L3.5 9.7v14.6L16 31.5l12.5-7.2V9.7L16 2.5z"
        stroke="#68a063"
        strokeWidth="2"
        fill="#68a063"
        fillOpacity="0.2"
      />
      <path
        d="M16 8v16M9 12l14 8M23 12L9 20"
        stroke="#68a063"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MongoIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 6 7.5 6 13.5C6 17.5 9 20.5 12 22C15 20.5 18 17.5 18 13.5C18 7.5 12 2 12 2Z"
        fill="#13aa52"
        fillOpacity="0.25"
        stroke="#13aa52"
        strokeWidth="1.8"
      />
      <path
        d="M12 2v20"
        stroke="#13aa52"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function OrbitalRingsBack({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-[5] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 850"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Intense neon laser red glow filter */}
          <filter id="orbital-glow-back" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feGaussianBlur stdDeviation="18" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Linear gradient for Ring 1 (depth fade into dark distance) */}
          {/* Linear gradient for Single Ring (depth fade into dark distance) */}
          <linearGradient id="ring1-back-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ff4d4d" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FF2A2A" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* SINGLE ORBITAL RING - Back Arc (passes behind right shoulder/neck) */}
        <g filter="url(#orbital-glow-back)">
          {/* Ambient wide halo */}
          <path
            d="M 53.3 579.9 A 320 100 -22 0 1 646.7 340.1"
            stroke="#FF2A2A"
            strokeWidth="5"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          {/* Sharp core laser */}
          <path
            id="ring1-back-path"
            d="M 53.3 579.9 A 320 100 -22 0 1 646.7 340.1"
            stroke="url(#ring1-back-grad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Moving dash trail */}
          <path
            d="M 53.3 579.9 A 320 100 -22 0 1 646.7 340.1"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeDasharray="40 180"
            strokeLinecap="round"
            className="animate-orbital-dash"
            opacity="0.85"
          />
        </g>

        {/* Moving comet particle on single ring back arc */}
        <circle r="3.5" fill="#ffffff" filter="url(#orbital-glow-back)">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M 53.3 579.9 A 320 100 -22 0 1 646.7 340.1"
          />
        </circle>
      </svg>
    </div>
  );
}

export function OrbitalRingsFront({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none z-[15] ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 700 850"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="orbital-glow-front" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2.5" result="blur1" />
            <feGaussianBlur stdDeviation="7" result="blur2" />
            <feGaussianBlur stdDeviation="15" result="blur3" />
            <feMerge>
              <feMergeNode in="blur3" />
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="ring1-front-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.4" />
            <stop offset="35%" stopColor="#ff4d4d" stopOpacity="1" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF2A2A" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* SINGLE ORBITAL RING - Front Arc (sweeps in front of forearm and torso) */}
        <g filter="url(#orbital-glow-front)">
          {/* Ambient wide halo */}
          <path
            d="M 646.7 340.1 A 320 100 -22 0 1 53.3 579.9"
            stroke="#FF2A2A"
            strokeWidth="6"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />
          {/* Sharp core laser */}
          <path
            id="ring1-front-path"
            d="M 646.7 340.1 A 320 100 -22 0 1 53.3 579.9"
            stroke="url(#ring1-front-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Moving energetic pulse */}
          <path
            d="M 646.7 340.1 A 320 100 -22 0 1 53.3 579.9"
            stroke="#ffffff"
            strokeWidth="2.8"
            strokeDasharray="60 220"
            strokeLinecap="round"
            className="animate-orbital-dash"
            opacity="0.95"
          />
        </g>

        {/* Leading comet head on single ring front arc */}
        <circle r="4" fill="#ffffff" filter="url(#orbital-glow-front)">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M 646.7 340.1 A 320 100 -22 0 1 53.3 579.9"
          />
        </circle>
      </svg>
    </div>
  );
}

/**
 * Floating Technology Badges Component
 * - Full-Stack Dev (Left, mid-torso)
 * - React (Upper-right, left shoulder area)
 * - Node.js (Middle-right, forearm area)
 * - MongoDB (Lower-left, abdomen area)
 */
export function FloatingTechBadges({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-20 ${className}`}
      aria-label="Floating Technology Stack Badges"
    >
      {/* 1. Full-Stack Dev Badge (Middle Left) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [-1, 1.5, -1],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          left: '21%',
          top: '48%',
          transform: 'translate(calc(var(--mx, 0) * -12px), calc(var(--my, 0) * -12px))',
        }}
        className="absolute pointer-events-auto"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FF2A2A]/40 shadow-[0_0_20px_rgba(255,42,42,0.25)] hover:border-[#FF2A2A] hover:shadow-[0_0_30px_rgba(255,42,42,0.65)] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-default select-none"
        >
          <Code2 className="w-4 h-4 text-[#FF2A2A] group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white group-hover:text-[#FF2A2A] transition-colors">
            Full-Stack Dev
          </span>
        </motion.div>
      </motion.div>

      {/* 2. React Badge (Upper Right) */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [1, -1.5, 1],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6,
        }}
        style={{
          right: '8%',
          top: '32%',
          transform: 'translate(calc(var(--mx, 0) * 14px), calc(var(--my, 0) * 14px))',
        }}
        className="absolute pointer-events-auto"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FF2A2A]/40 shadow-[0_0_20px_rgba(255,42,42,0.25)] hover:border-[#FF2A2A] hover:shadow-[0_0_30px_rgba(255,42,42,0.65)] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-default select-none"
        >
          <ReactIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-700" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white group-hover:text-[#00d8ff] transition-colors">
            React
          </span>
        </motion.div>
      </motion.div>

      {/* 3. Node.js Badge (Middle Right) */}
      <motion.div
        animate={{
          y: [0, -11, 0],
          rotate: [-1.5, 1, -1.5],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2,
        }}
        style={{
          right: '5%',
          top: '56%',
          transform: 'translate(calc(var(--mx, 0) * 10px), calc(var(--my, 0) * 10px))',
        }}
        className="absolute pointer-events-auto"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FF2A2A]/40 shadow-[0_0_20px_rgba(255,42,42,0.25)] hover:border-[#FF2A2A] hover:shadow-[0_0_30px_rgba(255,42,42,0.65)] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-default select-none"
        >
          <NodeIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white group-hover:text-[#68a063] transition-colors">
            Node.js
          </span>
        </motion.div>
      </motion.div>

      {/* 4. MongoDB Badge (Lower Left) */}
      <motion.div
        animate={{
          y: [0, 9, 0],
          rotate: [1, -1, 1],
        }}
        transition={{
          duration: 4.9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.8,
        }}
        style={{
          left: '28%',
          top: '71%',
          transform: 'translate(calc(var(--mx, 0) * -10px), calc(var(--my, 0) * -10px))',
        }}
        className="absolute pointer-events-auto"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#FF2A2A]/40 shadow-[0_0_20px_rgba(255,42,42,0.25)] hover:border-[#FF2A2A] hover:shadow-[0_0_30px_rgba(255,42,42,0.65)] hover:bg-[#FF2A2A]/10 transition-all duration-300 cursor-default select-none"
        >
          <MongoIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wide text-white group-hover:text-[#13aa52] transition-colors">
            MongoDB
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
