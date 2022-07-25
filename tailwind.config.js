/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'lightgreen': '#CED5CF',
      'funkyorange': '#FBA366',
      'darkgreen': '#6E7E5F',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}