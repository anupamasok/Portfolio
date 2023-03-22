const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    // "./public/**/*.{html,njk}",
    // "./src/**/*.{html,njk}",
    "./src/_includes/**/*.{html,njk,css}",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};
