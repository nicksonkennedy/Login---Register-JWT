/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xsm': '360px',
        'mdd': '990px',
        // => @media (min-width: 640px) { ... }
        'mdmd':'935px',
      },
      maxWidth: {
        '8xl':'80rem'
      },
      padding: {
        '13': '3.25rem',
        '15': '3.75rem'
      },
      colors: {
        'bermuda': 'rgb(214, 214, 214) ',
        'seablue': '#12475f',
        'blueblue': '#00548e',
        'deepblue' : 'rgb(1, 17, 46)',
        'transparent' : 'rgb(0, 0, 0, 0.5)',
      },
      backgroundColor:{
        'transparent' : 'rgb(0, 0, 0, 0.5)'
      },
      textUnderlineOffset: {
        20: '20px',
      }
    },
  },
  plugins: [],
}
