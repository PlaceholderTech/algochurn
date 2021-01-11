module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter"],
      robotomono: ["Roboto Mono"],
    },
    letterSpacing: {
      tightest: "-.075em",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
