import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/**
 * Lusion-Inspired Fluid Reactive Cursor
 * Features an inner precision dot and an elastic outer trailing ring that
 * morphs contextually (e.g. expands into "VIEW" on interactive project cards).
 */
export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('');
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'hover' | 'view'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Elastic trailing spring physics
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check context under cursor
      const target = e.target;
      if (!target) return;

      const viewElement = target.closest('[data-cursor="view"]');
      const clickableElement = target.closest('button, a, input, textarea, [role="button"]');

      if (viewElement) {
        setCursorType('view');
        setCursorText('VIEW ↗');
      } else if (clickableElement) {
        setCursorType('hover');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Elastic Trailing Ring / Context Pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center font-mono text-[10px] font-bold tracking-wider uppercase text-white pointer-events-none z-50"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'view' ? 76 : cursorType === 'hover' ? 42 : 28,
          height: cursorType === 'view' ? 32 : cursorType === 'hover' ? 42 : 28,
          borderRadius: cursorType === 'view' ? '9999px' : '50%',
          backgroundColor:
            cursorType === 'view'
              ? 'rgba(255, 42, 42, 0.92)'
              : cursorType === 'hover'
              ? 'rgba(255, 42, 42, 0.15)'
              : 'transparent',
          borderColor:
            cursorType === 'view'
              ? '#FF2A2A'
              : cursorType === 'hover'
              ? 'rgba(255, 42, 42, 0.7)'
              : 'rgba(255, 42, 42, 0.45)',
          borderWidth: cursorType === 'view' ? '0px' : '1.5px',
          boxShadow:
            cursorType === 'view'
              ? '0 0 25px rgba(255, 42, 42, 0.6)'
              : cursorType === 'hover'
              ? '0 0 15px rgba(255, 42, 42, 0.3)'
              : 'none',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-white drop-shadow-sm select-none"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precision Dot (Only in default & hover mode) */}
      {cursorType !== 'view' && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] pointer-events-none z-50"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </div>
  );
}
