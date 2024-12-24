import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#336D85", // Bleu pétrole
        secondary: "#5C9EAD", // Bleu clair doux
        tertiary: "#0C253A", // Jaune ocre
        error: '#D72638',
        neutral: {
          DEFAULT: "#F4F8FB", // Blanc cassé
          variant: "#E1E9F1", // Gris bleu clair
        },
        "neutral-dark": {
          DEFAULT: "#1B2B34", // Bleu gris foncé
          variant: "#243B47", // Gris ardoise foncé
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
