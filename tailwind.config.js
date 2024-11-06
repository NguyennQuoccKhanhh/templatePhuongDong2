/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lato':['Lato','sans-serif'],
        'Allura':['Allura'],
      },
      keyframes: {
        slideDown: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
    },
  },
  plugins: [],
}

