/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '12': '12px',
      },
      colors:{
        'glasses' :  'rgba(255, 255, 255, 0.40)',
        
      },
      fontFamily:{
       
      }
    },
  },
  plugins: [
  ],
}

