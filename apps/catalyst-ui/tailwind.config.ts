import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          '100': '#FBFBFB',
          '200': '#F4F5F6',
          '300': '#E6E8EC',
          '400': '#B1B5C3',
          '500': '#777E90',
          '600': '#353945',
          '700': '#23262F',
          '800': '#141416',
          '900': '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
};
export default config;
