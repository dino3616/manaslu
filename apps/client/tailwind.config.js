const tailwindScrollbar = require('tailwind-scrollbar');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
const config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
        inter: ['var(--font-inter)'],
        rakkas: ['var(--font-rakkas)'],
        code: ['var(--font-inconsolata)'],
      },
      colors: {
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#FEF08A',
          100: '#FEF08A',
          200: '#D6C900',
          300: '#B8AD00',
          400: '#9C9200',
          500: '#807800',
          600: '#666000',
          700: '#4D4800',
          800: '#353100',
          900: '#1F1C02',
        },
        secondary: {
          DEFAULT: '#76EF81',
          100: '#76EF81',
          200: '#66DF73',
          300: '#53C160',
          400: '#45A350',
          500: '#388641',
          600: '#2B6B32',
          700: '#1F5124',
          800: '#143718',
          900: '#0D200C',
        },
        accent: {
          DEFAULT: '#A168EA',
          100: '#EBDEF7',
          200: '#D7BCF4',
          300: '#C39AF1',
          400: '#AD79EC',
          500: '#A168EA',
          600: '#7A32E3',
          700: '#5C1DBA',
          800: '#401383',
          900: '#260C4C',
        },
        info: {
          DEFAULT: '#3ABFF8',
          100: '#CBE7F9',
          200: '#89D0F8',
          300: '#3ABFF8',
          400: '#2E9CCB',
          500: '#2481A8',
          600: '#1B6686',
          700: '#124D66',
          800: '#0C3547',
          900: '#081E29',
        },
        success: {
          DEFAULT: '#36D399',
          100: '#7BFAC3',
          200: '#36D399',
          300: '#30C28C',
          400: '#27A476',
          500: '#1F8761',
          600: '#176B4C',
          700: '#0F5138',
          800: '#0A3826',
          900: '#072016',
        },
        caution: {
          DEFAULT: '#FBBD23',
          100: '#FBDEAC',
          200: '#FBBD23',
          300: '#D8A110',
          400: '#B7880B',
          500: '#977007',
          600: '#785805',
          700: '#5B4203',
          800: '#3E2D04',
          900: '#231A06',
        },
        danger: {
          DEFAULT: '#F87272',
          100: '#F9DBD9',
          200: '#F9B5B0',
          300: '#F98A87',
          400: '#F87272',
          500: '#E12641',
          600: '#B51C32',
          700: '#8A1324',
          800: '#610D18',
          900: '#390909',
        },
        neutral: {
          DEFAULT: '#000000',
          100: '#E2E2E2',
          200: '#C6C6C6',
          300: '#ABABAB',
          400: '#919191',
          500: '#777777',
          600: '#5E5E5E',
          700: '#474747',
          800: '#303030',
          900: '#000000',
        },
        cosmic: {
          g1: '#9847FF',
          g2: '#369DCA',
        },
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
    plugin(({ addUtilities }) => {
      const gradientColorNames = ['cosmic'];
      const resolveColorObjectByName = (name) => name.split('-').reduce((acc, current) => acc[current] || undefined, config.theme.extend.colors);
      const newUtilities = Object.fromEntries(
        gradientColorNames
          .map((name) => ({ name, obj: resolveColorObjectByName(name) }))
          .filter(({ obj }) => !!obj)
          .map(({ name, obj }) => [
            `.gradient-${name}`,
            {
              '--tw-gradient-from': `${obj.g1}`,
              '--tw-gradient-to': `${obj.g2}`,
              '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`,
            },
          ]),
      );

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover', 'focus', 'active', 'disabled', 'visited'],
      });
    }),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};

module.exports = config;
