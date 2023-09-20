/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "fuchsia-500": "#D434FE",
      "purple-500": "#903AFF",
      "dark-purple": "#150E28",
      "white":"#ffff"
    },
    extend: {
      fontFamily: {
        "ClashDisplay": ["ClashDisplay", "sans-serif"],
        "Montserrat": ["Montserrat", "sans-serif"],
      },
      animation: {
        border: 'background ease infinite',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
    },
  },
  plugins: [],
}}
