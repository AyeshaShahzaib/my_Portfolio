/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Adjusting paths for Tailwind
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3B82F6",
        secondary:'#4a5568',
        accent:"#F472B6",
        background:"#F3F4F6",
        text_color:"#1F2937"
      },
      fontSize: {
        xxs: '0.625rem', // 10px
      }
    },
  },
  plugins: [],
};