/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Lato':['Lato','sans-serif'],
        'Allura':['Allura'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

