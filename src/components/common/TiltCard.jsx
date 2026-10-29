import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/**
 * Modern 3D Tilt Card Component
 * Uses Framer Motion spring physics for ultra-smooth 60/120fps GPU-accelerated 3D tilt.
 * Includes interactive specular glare and supports multi-layer 3D depth (translateZ).
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
  glare = true,
  glareOpacity = 0.15,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Normalized cursor coordinate [0, 1]
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Liquid smooth spring configuration
  const springConfig = { damping: 26, stiffness: 140, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map normalized coordinates to rotation angles (degrees)
  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);

  // Glare position percentage
  const glareX = useTransform(smoothX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothY, [0, 1], [0, 100]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        perspective: 1000,
        willChange: 'transform',
      }}
      className={`relative ${className}`}
      {...props}
    >
      {children}

      {/* Dynamic Specular Glare Reflection Sheen */}
      {glare && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[inherit] overflow-hidden transition-opacity duration-300 z-30"
          style={{
            opacity: isHovered ? glareOpacity : 0,
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(circle 320px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.75), transparent 70%)`
            ),
          }}
        />
      )}
    </motion.div>
  );
}
