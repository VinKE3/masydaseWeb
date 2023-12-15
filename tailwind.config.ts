import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "rgba(255,255,255, 0.3);",
        primaryDark: "rgba(255,255,255, 0.7);",
        gray: "rgb(135, 143, 147)",
        grayDark: "rgb(124, 124, 132)",
        primary: "rgb(36, 131, 171)",
        blue: "rgb(11, 60, 108)",
        secondary: "#6DE4E8",
        gradient:
          "linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)",
      },
      backgroundImage: {
        radialBlack:
          "linear-gradient(225.95deg, #ffffff 0%, #6d6d6d 0%, #11101d 91.61%)",
        blueRadial:
          "linear-gradient(90deg, #6de4e8 0%, rgba(0, 178, 218, 0.6) 95.83%)",
        blueLight:
          "linear-gradient(90deg, #6de4e8 0%, rgba(255, 255, 255, 0.86) 95.83% )",
      },
      boxShadow: {
        dark: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
