/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(10 10 15)",
          light: "rgb(20 20 30)",
          lighter: "rgb(30 30 45)",
        },
        primary: {
          DEFAULT: "rgb(6 182 212)",
          50: "rgba(6, 182, 212, 0.05)",
          100: "rgba(6, 182, 212, 0.1)",
          200: "rgba(6, 182, 212, 0.2)",
          300: "rgba(6, 182, 212, 0.3)",
        },
        accent: {
          DEFAULT: "rgb(139 92 246)",
          50: "rgba(139, 92, 246, 0.05)",
          100: "rgba(139, 92, 246, 0.1)",
          200: "rgba(139, 92, 246, 0.2)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-delay": "float 10s ease-in-out infinite 3s",
        "float-slow": "float 14s ease-in-out infinite 1s",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        shimmer: "shimmer 2s ease-in-out infinite",
        "grid-flow": "grid-flow 20s linear infinite",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backdropBlur: {
        "3xl": "64px",
      },
    },
  },
  plugins: [],
};
