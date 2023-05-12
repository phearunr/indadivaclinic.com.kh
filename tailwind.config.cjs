/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
      primary: 'Playfair Display',
      body:  ['"Work Sans"', '"Noto Serif Khmer"', '"serif"'],

    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#070707",
        bg_light_primary: "#fee486",
        gray: "#070707",
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #feb318 0.48%, #fee486 100%)",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
