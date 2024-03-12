/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      '4xs': '270px',
      // => @media (min-width: 270px) { ... }

      '3xs': '360px',
      // => @media (min-width: 360px) { ... }

      '2xs': '414px',
      // => @media (min-width: 414px) { ... }

      'mxs': '480px',
      // => @media (min-width: 480px) { ... }

      'xs': '576px',
      // => @media (min-width: 576px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
