/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  '#fff8f0',
          100: '#ffecd0',
          200: '#ffd49a',
          300: '#ffb558',
          400: '#ff9520',
          500: '#f97316',
          600: '#e8560a',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        spiritual: {
          gold: '#d4a017',
          cream: '#fdf8f0',
          brown: '#5c3d1e',
        }
      },
      fontFamily: {
        serif: ['"Tiro Devanagari Sanskrit"', 'Georgia', 'serif'],
        display: ['"Cinzel Decorative"', 'serif'],
        body: ['"Lora"', 'Georgia', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'count-up': 'countUp 0.3s ease-out',
        'celebrate': 'celebrate 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px rgba(249,115,22,0.3)' },
          '100%': { textShadow: '0 0 25px rgba(249,115,22,0.8), 0 0 50px rgba(249,115,22,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        countUp: {
          '0%': { transform: 'scale(1.4)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        celebrate: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
