const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // './src/helpers/Header/**/*.{js,ts,jsx,tsx}',
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    // './src/modals/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      clBlueContainer: "#01022F",
      clDarkBlue: "rgba(43, 45, 80, 1)",
      clBlue: "rgba(32, 36, 71, 0.6)",
      clDarkPurple: "#4C0082",
      clLightPurple: "rgba(43, 45, 80,0.6)",
      clSky: "rgba(88, 66, 244, 1)",
      clLgPurple: "#F8F3FF",
      clDBlue: "#00000E",
      clLBlue: "#11111e",
      clPurple: "#8447E9",
      clRed: "#FF013E",
      clwhite: "rgba(255, 255, 255, 0.2)",
      clIconBackground: "rgba(0,0,0,0.3)",
      clGray: "#A0A0A0",
      clLightGray: "#FCFAFF",
      clGray: "#919191",
      clShadow: "#00000069",

      clProgress: "#5BA0CA",
      clSuccess: "#47C085",

      clBlack: "#242424",

      clPink: "#FF725E",

      clLgGrey: "#959595",

      clDGray: "#222222",
      clGray500: "#505050",
      clGray200: "#929292",
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    screens: {
      mobile: "400px",
      mobileLg: "515px",
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        clContainerLg: "1440px",
        clContainer: "1390px",
        clContainerSm: "1158px",
        clContainerXs: "995px",
      },
      fontSize: {
        clH1: "3.875rem",
        clH2: "3rem",
        clH3: "2rem",
        clH4: "1.5rem",
        clH5: "1.25rem",
        clH6: "1.125rem",
        clBody1: "1rem",
        clBody2: "0.875rem",
        clCaption: "0.75rem",
        clCaption2: "0.625rem",
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
};
