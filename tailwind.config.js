/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      badScript: ["Bad Script", "cursive"],
    },
    extend: {
      colors: {
        primary: "#28176f",
        secondary: "#02923f",
        tertiary: '#443829',
        gray: "#6D6D6D",
        "black-rgba": "rgba(58, 58, 58, 0.6)",
      },
      boxShadow: {
        "3xl":
          "0px 9.40171px 9.40171px -4.70085px rgba(0, 0, 0, 0.04), 0px 18.8034px 23.5043px -4.70085px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}

