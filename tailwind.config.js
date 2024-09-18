/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        madinah: ['madinah']
      },
      fontFamily:{
        vogue: ['vogue']
      },
      backgroundImage: {
        'primario': "url('../img/atendendo.png')",
        'secundario': "url('../img/bg-tela-grande.svg')",
      },
    },
      screens: {
        'sm': '391px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1700px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },   
    
  },
  plugins: [],
}

