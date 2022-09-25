/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      accordionMenuItem: "#f55661",
      accordionBgDefault: "#393d42",
      accordionSelectedBg: "#33373B",
      brandsBgDefault: "#2a2f33",
      socialityBrandBg: "#31363b",
      brandsNotificationBg: "#3ac1a9",
      brandsBg: "#fff",
      toggleIcon: "#000",
      mainBgDefault: "#f5f7f8",
      postMessageColor: "#9d9d9d",
      postDateIconsColor: "#979797",
    },
  },
  plugins: [],
};
