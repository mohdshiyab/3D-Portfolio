import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGSAPScrollAnimations Hook
 * Clean, consolidated scroll-triggered reveals using native browser scrolling.
 * Automatically cleans up on unmount and respects prefers-reduced-motion.
 */
export default function useGSAPScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      // 1. Staggered Skill Cards
      gsap.utils.toArray('#skills .skill-card').forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (idx % 2) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Experience & Career Timeline Items
      gsap.utils.toArray('#experience .career-item').forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
}
