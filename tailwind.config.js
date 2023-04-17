const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**.{js,jsx,ts,tsx}",
    "./node_modules/style-analtecsas-sb/**/*.{ts,tsx, js, jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}