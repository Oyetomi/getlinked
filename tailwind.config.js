/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    colors: {
      "fuchsia-400": "#d558fe",
      "fuchsia-500": "#D434FE",
      'fuchsia-700': "#b501e4",
      "purple-500": "#903AFF",
      "dark-purple": "#150E28",
      "white":"#ffff",
      "red": "#FF0000",
    },
    extend: {
      fontFamily: {
        "ClashDisplay": ["ClashDisplay", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
      },
  },
  plugins: [require('tailwindcss-animated')],
}}
