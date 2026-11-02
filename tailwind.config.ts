import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // <-- ADD THIS LINE to enable manual dark mode
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#144443", // Deep Teal/Green (Main Brand)
          primaryLight: "#216f6e", // Lighter Teal
          primaryDark: "#071918", // Darker Teal
          secondary: "#039397", // Bright Teal/Cyan
          accent: "#c8f169", // Lime Green Accent
          accentDark: "#b5ec36", // Darker Lime Green
          heading: "#0b3130", // Very Dark Teal for text
          text: "#646464", // Body text gray
          background: "#ffffff", // White background
          surface: "#f8f5f0", // Off-white background
          border: "#e2e8f0", // Light border
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["DM Sans", "sans-serif"],
      },
    },
    keyframes: {
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      "fade-in": "fadeIn 1s ease-out forwards",
      "fade-in-up-delay-1": "fadeInUp 0.8s ease-out 0.2s forwards",
      "fade-in-up-delay-2": "fadeInUp 0.8s ease-out 0.4s forwards",
      "fade-in-up-delay-3": "fadeInUp 0.8s ease-out 0.6s forwards",
    },
  },
  plugins: [],
} satisfies Config;
