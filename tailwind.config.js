/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #4e54c8, #8f94fb)',
        'gradient-isInCart': 'linear-gradient(90deg, #8f94fb, #4e54c8)',
      },
    },
  },
  plugins: [],
}

