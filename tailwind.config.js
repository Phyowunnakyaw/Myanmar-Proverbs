/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main' : '#9dcaeb',
        'sec' : '#afd5f0',
        'sienna' : '#3e340e',
        'drab' : '#795024',
        'coff' : '#744c2d'
      }
    },
  },
  plugins: [],
}

