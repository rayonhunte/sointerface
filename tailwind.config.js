// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
   './src/**/*.{js,jsx,ts,tsx}',
'./.storybook/**/*.{js,jsx,ts,tsx}',
 "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
}

export default config;