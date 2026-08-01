"use client";

import { useEffect, useRef } from "react";

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch-only devices — a cursor glow adds nothing there.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 200}px, ${
          e.clientY - 200
        }px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[1] h-[400px] w-[400px] rounded-full opacity-30 will-change-transform hidden sm:block"
      style={{
        background:
          "radial-gradient(circle, rgba(112,66,248,0.25) 0%, rgba(14,165,233,0.12) 45%, transparent 70%)",
        transition: "transform 0.08s linear",
      }}
    />
  );
};
