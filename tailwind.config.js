/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans :["Ubuntu", ...defaultTheme.fontFamily.sans],
         },
      colors:{
        'primaryblue':"#1364f1",
        'primarygreen':"#d1f093",
        'secondarygreen':"#fefefe",
        'primarycyan':"#cae3e8",
        "secondarycyan":"#93bfda",
        'primarycolor':'#132644',
        'linkcolor':"#0648EF"
      },
      animation:{
        'infinite-scroll': 'infinite-scroll 10s linear infinite',

      },
      keyframes:{
        'infinite-scroll':{
          from:{ transform:'translateX(0)'},
          to: {transform:'translateX(-100%)'}
        },
       
      },

    
    
    },
  },
  plugins: [],
}




