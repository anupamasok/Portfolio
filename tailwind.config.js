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
        mainColor: colors.sky,
        secondaryColor: colors.blue,
      },
      fontFamily: {
        playfair: ["Lora"],
        roboto: ["Roboto"],
        sourcecode: ["Source Code Pro"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-neumorphism"),
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};
