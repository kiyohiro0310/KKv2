import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-myFont)']
      },
      colors: {
        main: "#88C057",
        sub: "#638B3F",
        skillC: "#EFEFEF",
        footer: "#2C2929"
      },
      backgroundImage: {
        'hero': "url('/images/hero-me.jpg')",
        'skill': "url('/images/skill-sets.jpg')",
        'life': "url('/images/life-journey.jpg')",
        'learn': "url('/images/learning-journey.jpg')",
        'me': "url('/images/me.jpg')",
        'life-hero': "url('/images/life-hero.jpg')",
        'life-middle': "url('/images/life-middle.jpg')"
      }
    },
  },
  plugins: [],
} satisfies Config;
