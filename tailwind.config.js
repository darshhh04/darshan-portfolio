/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //main background of the whole page
        background: "#0B0F14",

        surface: "#121821",
        //main text
        text: "#EDEAE3",
        //secondary text
        muted: "#8993A3",
        //for highlights, links, buttons
        accent: "#F2B705",

        accent2: "#4FD1C5",
        // border color
        line: "#232B36",
      },
      fontFamily: {
        //big headings
        display: ["Space Grotesk", "sans-serif"],
        //paragraph text
        body: ["Inter", "sans-serif"],
        //code-like text
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
