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
        // Premium Light Mode Palette
        "light-bg": "#F8FAFC", // Off-white/slate for a crisp look
        "light-card": "#FFFFFF",
        "light-text-primary": "#0F172A", // Deep slate/charcoal
        "light-text-secondary": "#475569",
        "light-border": "#E2E8F0",
        
        // Premium Dark Mode Palette
        "dark-bg": "#0B0F19", // Deep midnight blue/black
        "dark-card": "#111827",
        "dark-card-hover": "#1F2937",
        "dark-text-primary": "#F8FAFC",
        "dark-text-secondary": "#94A3B8",
        "dark-border": "#1E293B",

        // Accent Colors (Gradients & Highlights)
        "accent-primary": "#3B82F6", // Vibrant Blue
        "accent-secondary": "#8B5CF6", // Vibrant Purple
        "accent-tertiary": "#EC4899", // Vibrant Pink
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
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))" },
          "50%": { opacity: ".5", filter: "drop-shadow(0 0 20px rgba(139, 92, 246, 0.8))" },
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
        'premium-gradient': 'linear-gradient(to right, #3B82F6, #8B5CF6, #EC4899)',
      }
    },
  },
  plugins: [],
};
