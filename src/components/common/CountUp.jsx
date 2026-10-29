import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

/**
 * Animated Counter Component
 * Eases numbers from 0 to target when scrolled into view.
 */
export default function CountUp({
  to,
  from = 0,
  duration = 1.8,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  // Parse numeric target from string (e.g. "10+" -> 10, "25%" -> 25)
  const targetNumber = typeof to === 'number' ? to : parseFloat(String(to).replace(/[^0-9.]/g, '')) || 0;

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(from + (targetNumber - from) * easedProgress);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, targetNumber, from, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
