/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
     
      sm: "360px",
      // => @media (min-width: 360px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1370px",
      // => @media (min-width: 1370px) { ... }
    },
  },
  // plugins: [require("tailwindcss-animated")],
};
