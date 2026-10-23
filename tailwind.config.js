/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['"Caveat"', 'cursive'],
        hand: ['"Patrick Hand"', 'cursive'],
        sans: ['"Quicksand"', 'sans-serif'],
      },
      colors: {
        paper: '#f4ece1',
        paperDark: '#e6dac8',
        ink: '#3d352e',
        accent: '#d48c70',
        sage: '#a3b19b',
      }
    },
  },
  plugins: [],
}