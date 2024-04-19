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
        'tertiarycyan':'#4793AF',
        'primarycolor':'#132644',
        'linkcolor':"#0648EF",
        'footerbg':'#F2F4F8',
        'gradherobgblue':'#E1E9FE',
        'gradherobggreen':'#E9F8D2',
        'gradherobgvia':'#FAFDFE',
        'bgcolor':'#f2f4f8'

        // 

        
      },
      animation:{
        'infinite-scrollac': 'infinite-scrollac 20s linear infinite',
        'infinite-scrollcl':'infinite -scrollcl 20s linear infinite'
      },
      keyframes:{
        'infinite-scrollac':{
          from:{ transform:'translateX(0)'},
          to: {transform:'translateX(-100%)'}
          },
        'infinite-scrollcl':{
            from:  {transform:'translateX(0)'},
            to: { transform:'translateX(100%)'}
          }
       
      },

    
    
    },
  },
  plugins: [],
}




