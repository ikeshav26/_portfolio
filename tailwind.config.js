module.exports = {
  // ...other config...
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "silk", // your light theme
      "black", // your dark theme
      // or use [yourThemeObject] if you define them in JS
    ],
    // If you want to use only your custom themes:
    // themes: ["silk", "black"],
  },
};