const { colors, fontFamily, fontSize, lineHeight, width } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sofia-Pro', ...fontFamily.sans],
        display: ['Sofia-Pro', ...fontFamily.sans],
        body: ['Sofia-Pro', ...fontFamily.sans],
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
      fontSize: {
        ...fontSize,
        '4.5xl': '2.6rem',
      },
      lineHeight: {
        ...lineHeight,
        brand: '1.125',
      },
      colors: {
        'brand-red': {
          100: '#EFE8FA',
          200: '#D7C5F3',
          300: '#BEA2EC',
          400: '#8E5CDE',
          500: '#5D16D0',
          600: '#5414BB',
          700: '#380D7D',
          800: '#2A0A5E',
          900: '#1C073E',
        },
        width: {
          ...width,
          einstein: '10rem',
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
          100: '#E5E5E5',
          900: '#262626',
        },
      },
    },
  },
  variants: { margin: ['responsive', 'hover', 'focus'] },
  plugins: [require('@tailwindcss/ui')],
};
