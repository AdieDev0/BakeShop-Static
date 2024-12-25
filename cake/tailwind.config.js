/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Josefin-Sans": ["Josefin Sans"],
        Pacifico: ["Pacifico"],
        "Mountains-of-Christmas": ["Mountains of Christmas"],
      },
    },
  },
  plugins: [require("daisyui")],
};
