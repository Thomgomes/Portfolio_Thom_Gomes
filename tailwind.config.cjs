/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  GoldenMode: ['class', '[data-mode="golden"]'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        pangolin: ['Pangolin']
      },
      screens: {
        'lmd': '900px',
        'sm2': '425px',
        'sm3': '310px',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
}
