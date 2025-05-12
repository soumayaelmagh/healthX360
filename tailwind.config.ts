import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#429867",
        secondary: "#040054",
        antiflash: "#f1f4f4",
        gray: "#B2B2B2",
        black: "rgb(7 13 9)",
        "black-75": "rgba(7, 13, 9, .75)",
        "black-50": "rgba(7, 13, 9, .50)",
        "black-25": "rgba(7, 13, 9, .25)",
        "black-10": "rgba(7, 13, 9, .10)",
        "black-05": "rgba(7, 13, 9, .05)",
      },
    },
  },
  plugins: [],
};
export default config;
