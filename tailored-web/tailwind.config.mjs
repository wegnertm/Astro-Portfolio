/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007F5F",
          dark: "#285943",
          darker: "#19381F",
          light: "#F8FFE5",
          bright: "#20FC8F",
        },
        secondary: {
          DEFAULT: "#6B4B69",
          dark: "#4A3958",
          light: "#9477A1",
          bright: "#FFE0DE",
        },
        gray: {
          DEFAULT: "#707070",
          light: "#EDEDED",
        },
        dark: "#011C26",
        white: "#FFFFFF",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "2.75rem",
      },
    },
  },
  plugins: [],
};
