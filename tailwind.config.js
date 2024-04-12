/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
