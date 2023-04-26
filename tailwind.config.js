/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily:{
        'new' : ["Poppins","sans-serif"],
        'sub' : ["Raleway","sans-serif"],
      },

      backgroundImage: {
        'herobg': "url(' ../images/bg_video.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'partt': "url('../images/01.png')",
        'Bg': "url('../images/03.png')",
        'secbg': "url('../images/30.png')",
      }


    },
  },
  plugins: [
    require('tailwind-scrollbar'),

  ],
}

