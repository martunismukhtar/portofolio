/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      'primary': '#007BFF',
      'secondary': '#E6E6E6',
      'tertiary': '#F8F8F8',
      'quaternary': '#F8F8F8',
     }
    },
  },
  plugins: [],
}