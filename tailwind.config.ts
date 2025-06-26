import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rethink: ['"Rethink Sans"', 'sans-serif'],
      },
      // fontSize: {
      //   base: "16px",
      // },
      // maxWidth: {
      //   wrapper: "768px",
      // },
    },
  },
  plugins: [],
};

export default config;
