import React, { useEffect, useRef } from 'react';

/**
 * HeroPortrait
 * ----------------------------------------------------------------------
 * Cursor-controlled "reveal window" effect for the hero portrait.
 *
 * - The normal portrait renders in normal flow (defines the box size).
 * - The alternate ("hover") portrait sits absolutely on top of it, and is
 *   clipped by a soft-edged radial CSS mask centered on the cursor.
 * - All continuously-changing values (cursor position, reveal radius,
 *   parallax, glow) are written directly to CSS custom properties via
 *   refs + requestAnimationFrame — no React re-renders on mousemove.
 * ----------------------------------------------------------------------
 * Tunable constants — adjust these to change the feel of the effect.
 */
const REVEAL_RADIUS = 120;      // px — max radius of the cursor reveal window
const CURSOR_LERP = 0.10;       // 0.08–0.15 — smoothing for cursor following
const ENTER_DURATION = 500;     // ms — reveal radius grow-in on mouse enter
const EXIT_DURATION = 400;      // ms — reveal radius shrink-out on mouse leave
const HOVER_SCALE = 1.02;       // subtle portrait scale while interacting
const HOVER_BRIGHTNESS = 1.03;  // subtle brightness lift while interacting
const MAX_PARALLAX = 5;         // px — max cursor-based parallax offset
const GLOW_OPACITY = 0.15;      // max opacity of the subtle red cursor glow

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function HeroPortrait({ normalSrc, hoverSrc, alt, imgClassName }) {
  const containerRef = useRef(null);

  // Mutable animation state that never triggers a re-render.
  const stateRef = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
    hovering: false,
    radiusFrom: 0,
    radiusTo: 0,
    radiusStart: 0,
    radiusDuration: 0,
    currentRadius: 0,
    width: 0,
    height: 0,
    canHover: false,
    reduceMotion: false,
    rafId: null,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const s = stateRef.current;

    const hoverMQ = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
    s.canHover = hoverMQ.matches;
    s.reduceMotion = motionMQ.matches;

    const handleHoverMQ = (e) => { s.canHover = e.matches; };
    const handleMotionMQ = (e) => { s.reduceMotion = e.matches; };
    hoverMQ.addEventListener('change', handleHoverMQ);
    motionMQ.addEventListener('change', handleMotionMQ);

    const measure = () => {
      const rect = container.getBoundingClientRect();
      s.width = rect.width;
      s.height = rect.height;
    };
    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(container);

    const animateRadiusTo = (target) => {
      s.radiusFrom = s.currentRadius;
      s.radiusTo = target;
      s.radiusStart = performance.now();
      s.radiusDuration = target > s.radiusFrom ? ENTER_DURATION : EXIT_DURATION;
    };

    const handlePointerMove = (e) => {
      if (!s.canHover) return;
      const rect = container.getBoundingClientRect();
      s.targetX = e.clientX - rect.left;
      s.targetY = e.clientY - rect.top;

      if (!s.hovering) {
        s.hovering = true;
        // Start the reveal right where the cursor entered, not from center.
        s.currentX = s.targetX;
        s.currentY = s.targetY;
        animateRadiusTo(REVEAL_RADIUS);
      }
    };

    const handlePointerLeave = () => {
      if (!s.hovering) return;
      s.hovering = false;
      animateRadiusTo(0);
    };

    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const tick = () => {
      // Smooth cursor following.
      s.currentX += (s.targetX - s.currentX) * CURSOR_LERP;
      s.currentY += (s.targetY - s.currentY) * CURSOR_LERP;

      // Eased radius grow/shrink.
      if (s.radiusDuration > 0) {
        const elapsed = performance.now() - s.radiusStart;
        const t = Math.min(1, elapsed / s.radiusDuration);
        const eased = s.radiusTo > s.radiusFrom ? easeOutCubic(t) : easeInOutCubic(t);
        s.currentRadius = s.radiusFrom + (s.radiusTo - s.radiusFrom) * eased;
        if (t >= 1) s.radiusDuration = 0;
      }

      const active = !s.reduceMotion && s.currentRadius > 0.5;

      container.style.setProperty('--reveal-x', `${s.currentX}px`);
      container.style.setProperty('--reveal-y', `${s.currentY}px`);
      container.style.setProperty('--reveal-r', `${Math.max(0, s.currentRadius)}px`);

      container.style.setProperty('--portrait-scale', active ? String(HOVER_SCALE) : '1');
      container.style.setProperty('--portrait-brightness', active ? String(HOVER_BRIGHTNESS) : '1');

      if (s.width && s.height) {
        const nx = s.currentX / s.width - 0.5;   // -0.5 .. 0.5
        const ny = s.currentY / s.height - 0.5;
        const px = active ? nx * MAX_PARALLAX * 2 : 0;
        const py = active ? ny * MAX_PARALLAX * 2 : 0;
        container.style.setProperty('--portrait-parallax-x', `${px}px`);
        container.style.setProperty('--portrait-parallax-y', `${py}px`);
      }

      const glowStrength = s.reduceMotion ? 0 : (s.currentRadius / REVEAL_RADIUS) * GLOW_OPACITY;
      container.style.setProperty('--glow-x', `${s.currentX}px`);
      container.style.setProperty('--glow-y', `${s.currentY}px`);
      container.style.setProperty('--glow-opacity', String(Math.max(0, Math.min(GLOW_OPACITY, glowStrength))));

      s.rafId = requestAnimationFrame(tick);
    };
    s.rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.rafId);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      resizeObserver.disconnect();
      hoverMQ.removeEventListener('change', handleHoverMQ);
      motionMQ.removeEventListener('change', handleMotionMQ);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-portrait-reveal relative pointer-events-auto">
      <img
        src={normalSrc}
        alt={alt}
        className={`hero-portrait-layer hero-portrait-normal ${imgClassName}`}
      />
      <img
        src={hoverSrc}
        alt=""
        aria-hidden="true"
        className={`hero-portrait-layer hero-portrait-hover absolute top-0 left-0 ${imgClassName}`}
      />
      <div className="hero-portrait-glow absolute inset-0" aria-hidden="true" />
    </div>
  );
}
