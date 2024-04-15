/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        22: "22rem",
      },
      height: {
        45: "45rem",
        63: "63rem",
      },
      colors: {
        gold: "#d5966c",
        "almost-black": "#151515",
        "dark-grey": "#444444",
        "white-color": "#ffffff",
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', "sans-serif"],
      },
      letterSpacing: {
        mega: "0.2275em",
      },
    },
  },
  plugins: [],
};
