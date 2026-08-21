import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#07090E",
        foreground: "#F7F8FA",
        obsidian: {
          950: "#040508",
          900: "#07090E",
          850: "#0B0F17",
          800: "#121722",
          700: "#1E2638",
        },
        gold: {
          50: "#FCF9EE",
          100: "#F7F0D4",
          200: "#EFE0A8",
          300: "#E5CD75",
          400: "#D8B44A",
          500: "#C89A25",
          600: "#A87A18",
          700: "#825A12",
          800: "#5F3F10",
          900: "#3D270B",
          950: "#221506",
        },
        rosegold: {
          50: "#FDF5F6",
          100: "#FCEBED",
          200: "#F9D7DB",
          300: "#F5C2C7",
          400: "#E89AA3",
          500: "#D9727E",
          600: "#C44F5D",
          700: "#9E3441",
          800: "#75242E",
          900: "#4D161E",
        },
        champagne: {
          100: "#FAF6EE",
          200: "#F4EBD8",
          300: "#E8D5C4",
          400: "#DBC19F",
          500: "#CBA978",
        },
        botanical: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        pearl: {
          100: "#FFFFFF",
          200: "#F9FAFB",
          300: "#F3F4F6",
          400: "#E5E7EB",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Inter", "system-ui", "sans-serif"],
        editorial: ["var(--font-cormorant)", "Cinzel", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "rose-glow": "radial-gradient(circle at center, rgba(245, 194, 199, 0.15) 0%, rgba(7, 9, 14, 0) 70%)",
        "gold-glow": "radial-gradient(circle at center, rgba(216, 180, 74, 0.18) 0%, rgba(7, 9, 14, 0) 70%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "pearl-border": "linear-gradient(135deg, rgba(245, 194, 199, 0.3) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(232, 213, 196, 0.2) 100%)",
        "gold-border": "linear-gradient(135deg, rgba(229, 205, 117, 0.5) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(200, 154, 37, 0.4) 100%)",
        "gold-card-bg": "linear-gradient(180deg, rgba(216, 180, 74, 0.04) 0%, rgba(11, 15, 23, 0.7) 100%)",
      },
      boxShadow: {
        "glow-gold": "0 0 35px -5px rgba(216, 180, 74, 0.35)",
        "glow-gold-card": "0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px 0 rgba(216, 180, 74, 0.15)",
        "glow-rose": "0 0 40px -10px rgba(245, 194, 199, 0.35)",
        "glow-subtle": "0 0 30px -5px rgba(255, 255, 255, 0.06)",
        "glow-card": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(216, 180, 74, 0.12)",
        "glass-inner": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-gentle": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "glow-pulse": "glow 3s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s infinite linear",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4", filter: "blur(40px)" },
          "100%": { opacity: "0.8", filter: "blur(60px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
