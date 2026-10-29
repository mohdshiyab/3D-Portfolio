import React from 'react';

/**
 * Animated Text Shimmer Component
 * Creates an animated luminous sweep across key highlight text.
 */
export default function TextShimmer({ children, className = '' }) {
  return (
    <span
      className={`inline-block bg-[linear-gradient(110deg,#FF2A2A,35%,#ffffff,50%,#FF2A2A,65%)] dark:bg-[linear-gradient(110deg,#FF2A2A,35%,#ffffff,50%,#FF2A2A,65%)] bg-[length:250%_100%] bg-clip-text text-transparent animate-shimmer font-bold ${className}`}
    >
      {children}
    </span>
  );
}
