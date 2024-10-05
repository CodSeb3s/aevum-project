/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '810px',
      },
      fontFamily: {
        inter: ['Inter', "sans-serif"],
      },
      boxShadow: {
        'custom-h1': '0px 4px 11.7px 0px rgba(0, 0, 0, 0.25)',
        'custom-p': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      
    },
  },
  plugins: [],
}

