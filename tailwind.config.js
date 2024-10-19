const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/TopBar.jsx",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundColor: "#000",
      listStyleType: {
        roman: "upper-roman",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
