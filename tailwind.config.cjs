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
        medium: "2.4rem",
        veryBig: "7rem",
        small: "1.5rem",
      },
      colors: {
        mainGreen: "#14A800",
        mainGreenLight: "#43b933",
        mainGreenDark: "#108600",
        mainBlueLight: "#3787ff",
        mainBlue: "#0569FF",
        mainBlueDark: "#0454cc",
      },

  
    },
  },
  plugins: [],
};
