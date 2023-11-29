/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        signature: ['Great Vibes'],
      },
      colors: {
        lightSlateGray: '#778899',
        node: '#3c873a',
      },
    },
  },
  plugins: [],
}
