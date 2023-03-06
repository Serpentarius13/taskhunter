const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2rem",
      "2xl": "2.4rem",
      "3xl": "3rem",
      "4xl": "3.6rem",
      "5xl": "4.8rem",
      "6xl": "6rem",
      "7xl": "7.2rem",
      "8xl": "9.6rem",
      "9xl": "12.8rem",
      medium: "3.2rem",
      extraSmall: "1rem",
      small: "1.4rem",
    },
    extend: {
      lineHeight: {
        large: "4rem",
        medium: "2.2rem",
        subLarge: "3rem",
        small: "1.2rem",
      },

      gap: {
        small: "2.4rem",
        veryBig: "7rem",
        verySmall: "1.5rem",
        medium: "5.5rem",
        mediumSmall: "2.8rem",
      },
      colors: {
        mainGreen: "#14A800",
        mainGreenLight: "#43b933",
        mainGreenDark: "#108600",
        mainBlueLight: "#78AEFF",
        mainBlue: "#0569FF",
        mainBlueDark: "#0454cc",

        lightGray: "#D8D8D8",
      },

      margin: {
        section: "5.6rem",
      },
    },
  },
  plugins: [],
};
