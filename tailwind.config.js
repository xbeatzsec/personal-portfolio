/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ff00',
        secondary: '#ff00ff',
        accent: '#00ffff',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
} 