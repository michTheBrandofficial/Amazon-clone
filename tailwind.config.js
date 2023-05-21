/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,tsx,jsx}',
    './pages/**/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: '#232f3e',
          DEFAULT: '#131921',
          lighter: '#384b63'
        },
        amazon_yellow: {
          DEFAULT: '#febd69'
        }, 
      },
      minHeight: {
        'screen-main': 'calc(100vh - 220px)'
      },
      fontFamily: {
        'Ember': ['Ember', 'sans-serif'],
        'EmberBd': ['EmberBd', 'sans-serif'],
        'EmberLt': ['EmberLt', 'sans-serif'],
      },
      screens: {
        sm: '375px', 
        md: '768px',
        lg: '1024px',
        xl: '1360px',
        '2xl': { 'min': '375px', 'max': '460px' },
        'ord': '620px',
        'xsm': '335px'
      }, 
      borderWidth: {
        '1': '1px'
      }   
    },
    keyframes: {
      shimmer: {
        '100%': { left: '100%' }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')],
};

