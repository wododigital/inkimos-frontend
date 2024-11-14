/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', 
  ],  theme: {
    extend: {
      colors:{
        green:'#22DAC4',
        white:'#FFFFFF',
        black:'#03030E',
        darkBlue:'#191931',
        grey:'#333333',
        lightGrey:'#C4C4C4',
        dblack:'#000000',
        dblue:'#191931',
        aboutgrey:'#666666',
        service:'#00021F',
        arrowBlue:'#0055FF'
      },
      sans: ['Nunito Sans', 'sans-serif'],    },
  },
  plugins: [],
}

