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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Target Brand Color #5B8CFF and derived solid shades
        brand: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c7dbff",
          300: "#a3c4ff",
          400: "#7da8ff",
          500: "#5B8CFF", // Exact primary color requested
          600: "#5B8CFF", // Primary buttons and active states
          700: "#4474f2", // Hover
          800: "#315edb",
          900: "#1e3a8a",
          950: "#142557",
        },
        indigo: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c7dbff",
          300: "#a3c4ff",
          400: "#7da8ff",
          500: "#5B8CFF",
          600: "#5B8CFF",
          700: "#4474f2",
          800: "#315edb",
          900: "#1e3a8a",
          950: "#142557",
        },
        navy: {
          800: "#0f172a",
          850: "#0d1527",
          900: "#0b0f19",
          950: "#070a12",
        },
        accent: {
          cyan: "#5B8CFF",
          emerald: "#10b981",
          violet: "#5B8CFF",
          amber: "#f59e0b",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)",
        "card": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
        "card-hover": "0 12px 32px -4px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.04)",
        "brand": "0 4px 14px 0 rgba(91, 140, 255, 0.3)",
      }
    },
  },
  plugins: [],
};
export default config;
