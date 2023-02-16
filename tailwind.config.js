/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridColumn: {
        'span-2' :'span 2'
      }
    },
  },
  plugins: [],
  corePlugins: {
    divideStyle: true,
  }
}
