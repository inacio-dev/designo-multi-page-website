const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        peach: 'hsl(11 73% 66%)',
        black: 'hsl(270 3% 11%)',
        white: 'hsl(0 0% 100%)',
        'light-peach': 'hsl(11 100% 80%)',
        'dark-grey': 'hsl(264 5% 20%)',
        'light-grey': 'hsl(210 17% 95%)',
      },
    },
  },
  plugins: [
    plugin(function({ theme, addBase, addUtilities }) {
      addUtilities({
        '.heading-1': {
          fontSize: '3rem',
          lineHeight: '3rem',
          fontWeight: '500',
          color: theme('colors.black'),
        },
        '.heading-2': {
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: '500',
          letterSpacing: '3rem',
          color: theme('colors.black'),
        },
        '.heading-3': {
          fontSize: '1.25rem',
          lineHeight: '1.625rem',
          letterSpacing: '0.3125rem',
          fontWeight: '500',
          textTransform: 'uppercase',
        },
      })

      addUtilities({
        '.grid-stack': {
          display: 'grid',
          'grid-template-areas': "'stack'",
        },
        '.grid-stack > *': {
          'grid-area': 'stack',
        },
      })
    }),
  ],
}
