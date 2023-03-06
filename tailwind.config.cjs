/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        large: "4rem",
        medium: "2.2rem",
        subLarge: "3rem",
        small: "1.2rem",
      },
      fontSize: {
        medium: "3.2rem",
        extraSmall: "1rem",
        small: "1.4rem",
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
      },

      padding: {
        section: '5.6rem'
      }
    },
  },
  plugins: [],
};
