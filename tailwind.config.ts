import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        primary: {
          DEFAULT: "#9CF400",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#9CF400",
          foreground: "#000000",
        },
        accent: {
          DEFAULT: "#9CF400",
          foreground: "#000000",
        },
        card: "rgba(255,255,255,0.05)",
        border: "rgba(255,255,255,0.10)",
        muted: "rgba(255,255,255,0.60)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 1.5s infinite",
        blink: "blink 1s step-end infinite",
        "scroll-dot": "scroll-dot 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(156, 244, 0, 0.5)",
        "glow-accent": "0 0 40px -8px rgba(156, 244, 0, 0.5)",
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
