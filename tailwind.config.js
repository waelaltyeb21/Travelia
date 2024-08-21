/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--bg-white)",
        "black-alpha-20": "var(--bg-black-alpha-20)",
        "lavender-blush": "var(--bg-lavender-blush)",
        "majorelle-blue": "var(--bg-majorelle-blue)",
        "ocean-blue": "var(--bg-ocean-blue)",
        "majorelle-blue-alpha-5": "var(--bg-majorelle-blue-alpha-5)",
        "misty-rose": "var(--bg-misty-rose)",
        "red-salsa": "var(--bg-red-salsa)",
        "red-salsa-alpha-5": "var(--bg-red-salsa-alpha-5)",
        "english-vermillion": "var(--bg-english-vermillion)",
        "chrome-yellow-alpha-5": "var(--bg-chrome-yellow-alpha-5)",
        "sunglow-alpha-10": "var(--bg-sunglow-alpha-10)",
        "gainsboro": "var(--bg-gainsboro)",
        "text-white": "var(--text-white)",
        "gunmetal": "var(--text-gunmetal)",
        "light-coral": "var(--text-light-coral)",
        "granite-gray": "var(--text-granite-gray)",
        "majorelle-blue": "var(--text-majorelle-blue)",
        "sunglow": "var(--text-sunglow)",
        // Dark
        "bg-dark": "#0B0B0C",
      },
      backgroundImage: {
        "hero-bg": "url('./src/Assets/images/hero-bg.jpg')",
        "exp-bg": "url('./src/Assets/images/cta-bg.jpg')",
      }
    },
  },
  plugins: [],
}