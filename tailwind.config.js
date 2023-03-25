/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        neutralgray: "#757575",
        neutralblack: "#2B2B2B",
        lightgray: "#62707C",
        darktheme: "#1B2730",
        customlink: "#1C8ED4",
        skytheme: "#81D4EF",
        dirtywhite: "#D7D7D9",
        darkgray: "#444B54",
      },
    },
  },

  plugins: [],
};
