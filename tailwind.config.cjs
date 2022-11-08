const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        void: "#10161B",
        brand: "#5B381C",
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
      fontFamily: {
        garamond: ['"EB Garamond"', "serif"],
        sans: ["Helvetica Neue", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
