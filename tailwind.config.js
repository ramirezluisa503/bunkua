/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      backgroundImage: {
        'portadaHomePage': "url('/src/assets/Images/ProvisionalPortadaHomePage.webp')",
      },
      
    },
  },
  plugins: [],
}