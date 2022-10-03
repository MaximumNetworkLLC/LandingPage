/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1538px",
      "2.5xl": "1736px",
      "3xl": "2560px",
    },
    extend: {
      colors: {
        bg: "#100E35",
        regularPurple: "#AF3BFF",
        maxPurple: "#351F59",
        maxPurple1: "#402F6A",
        bgl1: "#131136",
        bgl2: "#181546",
        left: "#1A1B69",
        right: "#8A165E",
        top: "#165A4F",
        darkPurple: "#341E63",
        cnl1: "#AF3BFF",
        cnl2: "#AF3BFF",
        mrg1: "#C88BFF",
        mrg2: "#100E35",
        lgbg: "#131136",
      },
      fontFamily: {
        mont: ["Montserrat"],
      },
      backgroundImage: {
        primaryButton:
          "radial-gradient(86.8% 325.5% at 8% 0%, #D446F1 0%, #9A35EB 100%)",
        "gradient-radial":
          "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "gradient-radial-at-t":
          "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "gradient-radial-at-b":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-radial-at-l":
          "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "gradient-radial-at-r":
          "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "gradient-radial-at-tl":
          "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "gradient-radial-at-tr":
          "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "gradient-radial-at-bl":
          "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "gradient-radial-at-br":
          "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
