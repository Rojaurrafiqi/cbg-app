/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       Lato: ["Lato", "sans-serif"],
       Raleway: ["Raleway", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
          },
      },
      colors: {
        'cbg-color': '#38b0af',
      },
    },
  },
  plugins: [],
}
