/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        "eb-garamond": ["EB Garamond", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      width: {
        128: "90rem",
      },
      gap: {
        128: "70rem",
      },
      colors: {
        "Dark-charcoal": "#333",
        Bej: "#FDFFEF",
        Org: "#EEC355",
        ferany: "#F8F8F8",
        whats: "#2C2C2C",
        darklight: "#231B3B",
        services: "#483778",
        lines: "#DC7FE8",
      },
      animation: {
        fadeIn: "fadeIn 3s ease-out forwards",
        slideUp: "slideUp 1s ease-in-out forwards",
        slideDown: "slideDown 1s ease-in-out forwards",
        shortSlideUp: "shortSlideUp 1s ease-out forwards",
        slideR: "slideR 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // Start invisible
          "100%": { opacity: "1" }, // End fully visible
        },
        slideR: {
          "0%": { transform: "translatex(-200%)", opacity: "0" },
          "100%": { transform: "translatex(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translatey(100%)", opacity: "0" },
          "100%": { transform: "translatey(0)", opacity: "1" },
        },

        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" }, // Start off-screen at the top
          "100%": { transform: "translateY(0)", opacity: "1" }, // End in place
        },
        shortSlideUp: {
          "0%": { transform: "translatey(30%)", opacity: "0" },
          "100%": { transform: "translatey(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
