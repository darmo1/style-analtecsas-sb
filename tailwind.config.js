const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/style-analtecsas-sb/src/**/*.{ts,tsx, js, jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}