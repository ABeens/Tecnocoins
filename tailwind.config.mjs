/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A6F97',
        'secondary': '#4B8BBE',
        'accent': '#eaf6fb'
      },
      animation: {
        'scroll-horizontal': 'scroll-horizontal 30s linear infinite',
        'scroll-horizontal-mobile': 'scroll-horizontal-mobile 25s linear infinite'
      },
      keyframes: {
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-horizontal-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-60%)' }
        }
      }
    },
  },
  plugins: [],
}