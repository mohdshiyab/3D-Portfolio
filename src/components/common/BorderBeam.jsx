import React from 'react';
import { motion } from 'motion/react';

/**
 * Animated Laser Border Beam Component
 * Traces a glowing beam along the card perimeter using GPU-accelerated rotation and CSS masking.
 */
export default function BorderBeam({
  duration = 8,
  colorFrom = '#FF2A2A',
  colorTo = '#ff7b7b',
  borderWidth = 1.5,
  className = '',
}) {
  return (
    <div
      className={`pointer-events-none absolute -inset-[1px] rounded-[inherit] overflow-hidden z-20 ${className}`}
      style={{
        padding: `${borderWidth}px`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-150%] origin-center"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 310deg, ${colorFrom} 345deg, ${colorTo} 360deg)`,
        }}
      />
    </div>
  );
}
