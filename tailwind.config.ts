import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#4A6CF7",
          electric: "#2563EB",
          cyan: "#06B6D4",
          green: "#10B981",
          purple: "#8B5CF6",
          dark: "#0A0F1E",
          darker: "#060B15",
          card: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 60% 50%, rgba(74,108,247,0.15) 0%, rgba(6,182,212,0.08) 40%, transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(74,108,247,0.1) 0%, rgba(6,182,212,0.05) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out",
        typing: "typing 1.5s steps(30) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(74,108,247,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(74,108,247,0.6), 0 0 80px rgba(6,182,212,0.3)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typing: {
          "0%": { width: "0" },
          "50%": { width: "100%" },
          "100%": { width: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
