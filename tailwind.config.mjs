/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#333333',
        'story-bg': 'rgb(223, 234, 240)',
      },
      fontFamily: {
        impact: ['Impact', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 