/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cream':'rgba(244,245,211,255)',
        'navy':'rgba(14,29,87,255)'
      }
    },
  },
  plugins: [],
}