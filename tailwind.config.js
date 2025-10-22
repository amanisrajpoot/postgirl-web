/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgPink: "#ec4899",
        pgIndigo: "#4f46e5"
      },
      fontFamily: {
        display: ['ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','sans-serif'],
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace']
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      }
    },
  },
  plugins: [],
};
