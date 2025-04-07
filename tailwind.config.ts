import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#17b765",
          light: "#1ed67b",
          dark: "#129a4f",
        },
        secondary: {
          DEFAULT: "#111111",
          light: "#444444",
          dark: "#000000",
        },
        neutral: {
          DEFAULT: "#F8F8F8",
          light: "#F5F5F5",
          dark: "#E5E5E5",
        },
        text: {
          primary: "#000000",
          secondary: "#111111",
          tertiary: "#444444",
          gray: "#d58488",
          gray2: "#101828",
          gray3: "#aaaaaa",
        },
        lightBlue: {
          DEFAULT: "#7f9aee",
        },
        border: {
          DEFAULT: "#E5E5E5",
        },
        fieldBg: {
          DEFAULT: "#f4f4f5",
        }
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
