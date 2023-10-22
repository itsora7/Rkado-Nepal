const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#423842",
      },
      backgroundImage: {
        site: "url('./assets/white.jpg')",
        about: "url('./assets/grad11.png')",
        services: "url('./assets/services.png')",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "50%": { transform: "translateX(50%)" },
          "0%": { transform: "translateX(0%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(50%)" },
          "50%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
