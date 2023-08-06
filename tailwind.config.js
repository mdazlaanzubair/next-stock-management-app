/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
          // primary: "#4682b3",
          // secondary: "#a9b7bf",
          // accent: "#ff8a6f",
          // neutral: "#f0f0f0",
          // "base-100": "#f5f5f5",
          // info: "#72c5f5",
          // success: "#a3d2b0",
          // warning: "#f6d391",
          // error: "#d36851",

          primary: "#63a8e0",
          secondary: "#b4c1c3",
          accent: "#f0b781",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#00b2f0",
          success: "#87d092",
          warning: "#f5d673",
          error: "#f78d87",
        },

        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
          primary: "#1c4f82",
          secondary: "#7d919b",
          accent: "#eb6b47",
          neutral: "#23282f",
          "base-100": "#212121",
          info: "#0092d6",
          success: "#6cb288",
          warning: "#daad58",
          error: "#ab3d30",
        },
      },
    ],
  },
};
