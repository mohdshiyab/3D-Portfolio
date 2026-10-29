import React from 'react';
import { motion } from 'motion/react';

/**
 * Lusion-Style Kinetic Masked Typography Reveal
 * Slides lines or words up from an overflow-hidden mask with high-tension deceleration.
 */
export default function MaskedReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
}) {
  return (
    <span className={`inline-block overflow-hidden align-top ${className}`}>
      <motion.span
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // Smooth cinematic deceleration
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}
