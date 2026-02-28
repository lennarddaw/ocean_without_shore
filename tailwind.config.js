/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viola: {
          black: '#0a0a0f',
          deep: '#1a1a2e',
          gold: '#d4a574',
          water: '#4a90d9',
          light: '#e8e8e8',
          muted: '#8888a0',
          highlight: '#f0c987',
          surface: '#12121f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
