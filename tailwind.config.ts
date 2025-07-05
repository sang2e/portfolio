import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './plugins/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rethink: ['"Rethink Sans"', 'sans-serif'],
        meddon: ['"Meddon"', 'cursive']
      },
    },
  },
  plugins: [],
};

export default config;
