const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'brand-red': {
          100: '#FBE8EC',
          200: '#F6C6CF',
          300: '#F1A3B2',
          400: '#E65E78',
          500: '#DB193E',
          600: '#C51738',
          700: '#830F25',
          800: '#630B1C',
          900: '#420813',
        },
        'brand-yellow': {
          100: '#FFF8E8',
          200: '#FFEDC5',
          300: '#FEE1A1',
          400: '#FECB5B',
          500: '#FDB515',
          600: '#E4A313',
          700: '#986D0D',
          800: '#725109',
          900: '#4C3606',
        },
        gray: {
          ...colors.gray,
          900: '#262626',
        },
      },
      fontFamily: {
        display: ['Roboto Slab', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms'), require('tailwindcss-skip-link')],
};
