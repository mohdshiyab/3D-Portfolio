/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        dark: {
          bg: '#050505',
          card: '#0c0c0c',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          subtle: '#141414',
        },
        crimson: {
          DEFAULT: '#FF2A2A',
          hover: '#e02020',
          glow: 'rgba(255, 42, 42, 0.45)',
          muted: 'rgba(255, 42, 42, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'Oswald', 'Impact', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
