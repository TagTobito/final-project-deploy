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
        // Agrega tus colores personalizados aquí
        customYellow: "#DEA875",
        customDarkGray: "#131313",
        customFarmColor: "#F4EB9E",
        customQuarryColor: "#B998B3",
        customSawmillColor: "#529A47",
        customBarracksColor: "#087EFF",
        customMineColor: "#DA901C",
      },
    },
  },
  plugins: [],
};
export default config;
