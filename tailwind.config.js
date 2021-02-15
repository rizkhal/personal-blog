module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class' or false
  whitelist: ["mode-dark"],
  theme: {
    darkSelector: ".mode-dark",
  },
  variants: {
    backgroundColor: ["hover", "responsive", " focus", "dark", "dark-hover"],
    textColor: ["hover", "responsive", "focus", "dark", "dark-hover"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
