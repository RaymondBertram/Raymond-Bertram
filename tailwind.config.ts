import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "code": "url('/images/code.jpg')",
        "argon": "linear-gradient(to top, #fdeff9, #ec38bc, #7303c0, #03001e);"
      },
    },
  },
  plugins: [],
};
export default config;
