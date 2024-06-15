import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {
        '3rem': '3rem',
      },
      colors: {
        // Définition des couleurs pour le mode clair
        'background-light': '#ffffff',
        'text-light': '#333333',
        // Définition des couleurs pour le mode sombre
        'background-dark': '#121212',
        'text-dark': '#cccccc',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
