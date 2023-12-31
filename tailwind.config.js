/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {

    fontFamily: {
      'sans': [...defaultTheme.fontFamily.sans],
      'ubuntu': ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [],
}
