/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./des/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        myfav:'#202020',
        gray:'#808080',
        c1:'#4B5945',
        c2:'#66785F',
        c3:'#91AC8F',
        c4:'#B2C9AD'
      },
      fontSize:{
        big:"40px",
      }
    },
  },
  plugins: [],
}

