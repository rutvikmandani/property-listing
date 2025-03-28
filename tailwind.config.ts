import { heroui } from "@heroui/react";
module.exports = {
  constent: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "571px",
        md: "990px",
        lg: "1100px",
      },
      fontSize: {
        "17": "17px",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
