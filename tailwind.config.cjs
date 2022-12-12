/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c7494c',        
      },      
      fontFamily: {      
        body: ['Manrope'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },

          {
              values: Object.assign(
                  theme('bgGradientDeg', {}),
                  {
                      10: '10deg',
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                  }
              )
          }
      )
  })
  ],
}