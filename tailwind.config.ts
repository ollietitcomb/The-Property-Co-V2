import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#0f172a",
        "brand-teal": "#0d9488",
        "brand-teal-light": "#14b8a6",
        "brand-grey": "#64748b",
        "brand-ink": "#1C1C1C",
        "brand-cloud": "#F6F7F9",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

