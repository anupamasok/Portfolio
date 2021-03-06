const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
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
  plugins: [],
};
