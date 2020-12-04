const { colors, fontFamily, fontSize, lineHeight, width } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Sofia-Pro', ...fontFamily.sans],
        display: ['Sofia-Pro', ...fontFamily.sans],
        body: ['Sofia-Pro', ...fontFamily.sans],
      },
      borderRadius: {
        default: '3px',
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
        'brand-blue': {
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
        gray: {
          ...colors.gray,
          100: '#F4F4F4',
          900: '#1F1F1F',
        },
      },
    },
  },
  variants: { extend: { margin: ['responsive', 'hover', 'focus'], scale: ['group-hover'] } },
  plugins: [require('@tailwindcss/ui')],
};
