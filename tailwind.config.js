/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lato':['Lato','sans-serif'],
        'Allura':['Allura'],
      }
    },
  },
  plugins: [],
}

