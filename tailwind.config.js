/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'lily-green': 'var(--lily-green)',
        'lily-light': 'var(--lily-light)',
      }
    },
  },
  plugins: [],
}