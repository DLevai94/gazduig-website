const { colors, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
        display: ['Roboto Slab', ...fontFamily.sans],
        body: ['Poppins', ...fontFamily.sans],
      },
      borderRadius: {
        default: '10px',
      },
      boxShadow: {
        brand: '3px 3px 10px rgba(0, 0, 0, 0.101)',
      },
      maxWidth: {
        '8xl': '86rem',
      },
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
        'brand-purple': {
          100: '#F0EAF4',
          200: '#D9CBE3',
          300: '#C2ABD3',
          400: '#946CB1',
          500: '#662D90',
          600: '#5C2982',
          700: '#3D1B56',
          800: '#2E1441',
          900: '#1F0E2B',
        },
        gray: {
          ...colors.gray,
          900: '#262626',
        },
      },
    },
  },
  variants: { margin: ['responsive', 'hover', 'focus'] },
  plugins: [require('@tailwindcss/ui')],
};
