import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codeit_purple: "#6500c3",
      },
      animation: {
        "marquee-center-to-left": "marquee-center-to-left 25s linear infinite",
        "marque-right-to-center": "marque-right-to-center 25s linear infinite",
      },
      keyframes: {
        "marquee-center-to-left": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "marque-right-to-center": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
