import React from 'react';

/**
 * Editorial Studio Corner Crosshairs
 * Technical corner markers ('+') seen in high-end design engineering portfolios.
 */
export default function CornerCrosshairs({ className = '', color = 'text-[#FF2A2A]/40' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-20 ${className}`}>
      <span className={`absolute top-2.5 left-2.5 font-mono text-xs select-none ${color}`}>+</span>
      <span className={`absolute top-2.5 right-2.5 font-mono text-xs select-none ${color}`}>+</span>
      <span className={`absolute bottom-2.5 left-2.5 font-mono text-xs select-none ${color}`}>+</span>
      <span className={`absolute bottom-2.5 right-2.5 font-mono text-xs select-none ${color}`}>+</span>
    </div>
  );
}
