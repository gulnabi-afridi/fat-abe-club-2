/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
    fontFamily: {
      BicycleLight: ["Bicyclette-Light", "sans-serif"],
      BicycleRegular: ['"Bicyclette-Regular"', "sans-serif"],
      BicycleThin: ["Bicyclette-Thin", "sans-serif"],
      Net: ["AzoSans-Black", "sans-serif"],
    },

    screens: {
      xs: "325px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    colors: {
      white: "#FFFFFF",
      lightWhite:"#939393",
    darkWhite:"#9c98a5",
      blue: "#150d29",
      green: "#58805a",
      black: "#000000",
    },
  },
  plugins: [],
};
