import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Animated Glowing Scroll Progress Bar
 * Sits fixed at the top of the viewport, filling dynamically with spring physics.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-[#FF2A2A] via-[#ff6868] to-[#FF2A2A] shadow-[0_0_12px_#FF2A2A] origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
