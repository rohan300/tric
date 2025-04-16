/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'inter-medium': ['Inter', 'sans-serif'],
        baloo: ['"Baloo 2"', 'cursive'],
        'ag-inner-title': ['"AG Inner Title"', 'sans-serif'],
      },
  },
  plugins: [],
}
}
