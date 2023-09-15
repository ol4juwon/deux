/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      gridTemplateColumns:{
        '4': 'repeat(4, minmax(0,1fr))',
      }
    },
  },
  plugins: [],
}

