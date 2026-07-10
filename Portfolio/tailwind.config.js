/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        // Screenshot-matched light palette
        "light-bg": "#F4FAFB",
        "light-card": "#FFFFFF",
        "light-text-primary": "#071417",
        "light-text-secondary": "#4D6670",
        "light-border": "#D9EAEE",
        
        // Screenshot-matched dark palette
        "dark-bg": "#030B0E",
        "dark-card": "#071820",
        "dark-card-hover": "#0D2430",
        "dark-text-primary": "#F2FBFD",
        "dark-text-secondary": "#8DB6C3",
        "dark-border": "#12313C",

        // Accent colors from the attached reference
        "accent-primary": "#19B8F2",
        "accent-secondary": "#27D5C4",
        "accent-tertiary": "#F0B84A",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        slideDown: "slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradientX 15s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 10px rgba(25, 184, 242, 0.35))" },
          "50%": { opacity: ".55", filter: "drop-shadow(0 0 20px rgba(39, 213, 196, 0.45))" },
        },
        gradientX: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #19B8F2, #27D5C4)",
      }
    },
  },
  plugins: [],
};
