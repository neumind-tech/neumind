import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FBF5E0',
          200: '#F5E9BC',
          300: '#EDD98A',
          400: '#E0C055',
          500: '#C9A84C',
          600: '#A8863A',
          700: '#886B2E',
          800: '#674F22',
          900: '#473515',
        },
        dark: {
          50:  '#1A1D24',
          100: '#141720',
          200: '#0F1117',
          300: '#0A0C10',
          400: '#060709',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'Courier New', 'monospace'],
      },
      animation: {
        'spin-slow':   'spin 3s linear infinite',
        'pulse-slow':  'pulse 4s ease-in-out infinite',
        'shimmer':     'shimmer 3.5s linear infinite',
        'fade-up':     'fadeUp 0.8s ease-out forwards',
        'fade-in':     'fadeIn 1s ease-out forwards',
        'draw-line':   'drawLine 1.2s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-300% 0' },
          '100%': { backgroundPosition: '300% 0'  },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)'    },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        drawLine: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
