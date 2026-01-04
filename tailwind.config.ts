import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-myFont)']
      },
      colors: {
        main: "#41644A",
        sub: "#0D4715",
        dark: "#2C2929",
        lightDark: "#3C3C3C",
        light: "#ECE5DA",
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
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
