import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'navmd':'996px'
      },
      fontFamily: {
        monster: ['Montserrat Alternates', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        primary: '#1C1F28',
        secondary: '#FA393A',
        yellow: '#F9CD16',
        blue:'#18093A'
      }
    },
  },
  plugins: [],
}

