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
          black: '#f8f7f4',
          deep: '#f0ede8',
          gold: '#a07040',
          water: '#2e6d9e',
          light: '#1a1a2e',
          muted: '#6b6b80',
          highlight: '#8a6530',
          surface: '#edeae4',
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
