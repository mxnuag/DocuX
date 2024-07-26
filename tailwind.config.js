/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00FFFF',
        'neon-green': '#39FF14',
        'neon-pink': '#FF007F',
        'neon-purple': '#BF00FF',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
