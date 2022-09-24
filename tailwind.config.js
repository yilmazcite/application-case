/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      accordionMenuItem: "#f55661",
      accordionBgDefault: "#393d42",
      accordionSelectedBg: "#33373B",
    },
  },
  plugins: [],
};
