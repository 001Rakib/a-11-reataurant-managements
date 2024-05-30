import daisyui from "daisyui";
import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake"],
  },
  plugins: [daisyui, flowbite.plugin()],
};
