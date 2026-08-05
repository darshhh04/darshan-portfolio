/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // main background of the whole page
        background: "#0B0F14",
        // slightly lighter panels/cards sitting on top of the background
        surface: "#121821",
        // main text color (off-white, not pure white so it's easier on the eyes)
        text: "#EDEAE3",
        // secondary/quiet text (labels, captions, descriptions)
        muted: "#8993A3",
        // the one accent color used for highlights, links, buttons
        accent: "#F2B705",
        // second accent, used rarely (small tags, code-style highlights)
        accent2: "#4FD1C5",
        // border color for dividing lines
        line: "#232B36",
      },
      fontFamily: {
        // big bold headings
        display: ["Space Grotesk", "sans-serif"],
        // normal paragraph text
        body: ["Inter", "sans-serif"],
        // labels, tags, code-like text
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
