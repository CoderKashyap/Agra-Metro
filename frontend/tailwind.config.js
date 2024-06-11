/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        quando: ['Quando', 'sans-serif'],
        // lora: ['Lora', 'sans-serif'],
        // roboto: ['Roboto', 'sans-serif'],
        // inter: ['Inter', 'sans-serif'],
      },
      opacity: ['group-hover'],

    },
  },
  plugins: [],
}