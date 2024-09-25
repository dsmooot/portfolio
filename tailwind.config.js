const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        exo_2: ['var(--font-exo_2)'],
      },
      screens: {
        ipad: { raw: '(min-width: 1024px) and (max-width: 1366px) and (orientation: portrait)' },
        'ipad-landscape': { raw: '(min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last-child', '&:not(:last-child)')
    }),
  ],
}
