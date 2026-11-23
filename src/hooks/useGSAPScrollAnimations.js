import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useGSAPScrollAnimations Hook
 * Connects Lenis smooth scroll with GSAP ScrollTrigger for
 * natural, cinematic entrances as sections enter the viewport.
 * Automatically cleans up on unmount and respects prefers-reduced-motion.
 */
export default function useGSAPScrollAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Connect Lenis to ScrollTrigger if Lenis instance exists
    if (window.__lenis && typeof window.__lenis.on === 'function') {
      window.__lenis.on('scroll', ScrollTrigger.update);
    }

    const ctx = gsap.context(() => {
      // 1. Staggered Skill Cards
      gsap.utils.toArray('#skills .group').forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            delay: (idx % 3) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 2. Project Cards Entrances with Scale & Stagger
      gsap.utils.toArray('#projects .group').forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: (idx % 3) * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 3. Experience & Career Timeline Items
      gsap.utils.toArray('#experience .space-y-6 > div').forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 86%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // 4. Hackathon Awards & Proof Cards
      gsap.utils.toArray('#hackathons .group').forEach((card, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (idx % 2) * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
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
