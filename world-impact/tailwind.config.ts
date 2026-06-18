import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C81",
          50: "#E8F1F8",
          100: "#C5D9EE",
          200: "#9EBEDD",
          300: "#77A2CC",
          400: "#518BBB",
          500: "#0F4C81",
          600: "#0D4070",
          700: "#0A325B",
          800: "#072444",
          900: "#04162B",
        },
        gold: {
          DEFAULT: "#F4B400",
          50: "#FFF8E1",
          100: "#FFECB3",
          200: "#FFE082",
          300: "#FFD54F",
          400: "#FFCA28",
          500: "#F4B400",
          600: "#E0A800",
          700: "#C79500",
          800: "#A07800",
          900: "#7A5C00",
        },
        gray: {
          50: "#F7F9FC",
          100: "#F0F4F8",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#2D3748",
          800: "#1A202C",
          900: "#171923",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        countUp: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(15,76,129,0.92) 0%, rgba(15,76,129,0.75) 50%, rgba(244,180,0,0.3) 100%)",
        "card-gradient":
          "linear-gradient(135deg, #0F4C81 0%, #1a6fbe 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0F4C81 0%, #073860 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(15,76,129,0.12)",
        "card-hover": "0 8px 40px rgba(15,76,129,0.24)",
        cta: "0 8px 32px rgba(244,180,0,0.3)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
