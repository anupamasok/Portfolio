const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./_site/**/*.{html,njk}"],
  theme: {
    extend: {
      borderWidth: {
        6: "6px",
      },
      colors: {
        cyan: colors.cyan,
        emerald: colors.emerald,
        mainColor: colors.lime,
        secondaryColor: colors.cyan,
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
