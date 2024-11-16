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
        blue:'#0055ff',
        arrowBlue:'#0055FF',
        bgblue:'#0E0E1F'
      },
      sans: ['Nunito Sans', 'sans-serif'],    },
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
        '4xl': '1786px',
      }
  },
  plugins: [],
}

