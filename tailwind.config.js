const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    // "./public/**/*.{html,njk}",
    // "./src/**/*.{html,njk}",
    "./src/**/*.{html,njk,css}",
  ],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
        mainColor: colors.amber,
        secondaryColor: colors.yellow,
      },
      fontFamily: {
        lato: ["Lato"],
        raleway: ["Raleway"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};
