/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        red1: "#CB0D1F",
        red2: "#ED1A39",
        red3: "#E50019",
        black1: "#231F20",
        black2: "#000000",
        black3: "#1A1818",
        gray1: "#E2DEDC",
        gray2: "#959595",
        gray3: "#808185",
        gray4: "#ACACAC",
        gray5: "#626262",
        gray6: "#8E8E8E",
        teal1: "#00A8A9",
        teal2: "#27A3A9",
        blue1: "#1E2B50",
        orange1: "#F26324",
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
