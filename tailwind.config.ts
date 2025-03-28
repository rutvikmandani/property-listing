module.exports = {
  constent: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
};
