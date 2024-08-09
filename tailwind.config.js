/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeColor: {
          100: "#FFF2D8",
          200: "#EAD7BB",
          300: "#BCA37F",
          400: "#30475E",
          500: "#DAC0A3",
          600: "#b89e6f",
          700: "#A27B5C",
        },
      },
    },
  },
  plugins: [],
};
