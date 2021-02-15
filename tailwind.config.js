module.exports = {
  enabled: process.env.NODE_ENV === "production",
  content: ["./index.html", "./src/**/*.{vue, js}"],
  options: {
    whitelist: ["mode-dark"],
  },
  darkMode: "media", // or 'media' or 'class' or false
  theme: {
    darkSelector: ".mode-dark",
  },
  variants: {
    backgroundColor: ["hover", "responsive", " focus", "dark", "dark-hover"],
    textColor: ["hover", "responsive", "focus", "dark", "dark-hover"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
};
