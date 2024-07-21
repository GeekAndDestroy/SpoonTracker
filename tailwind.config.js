/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#E200E6",
          "secondary": "#e7e7e7",
          "accent": "#ffff00",
          "neutral": "#E200E6",
          "base-100": "#ffffff",
          // "info": "#46BB91",
          "info": "#62b2fd",
          "success": "#00ff00",
          "warning": "#fdb900",
          "error": "#ff8eab",
          },
        // dark: {
        //   "primary": "#E200E6",
        //   "secondary": "#e7e7e7",
        //   "accent": "#ffff00",
        //   "neutral": "#E200E6",
        //   "base-100": "#ffffff",
        //   "info": "#62b2fd",
        //   "success": "#00ff00",
        //   "warning": "#fdb900",
        //   "error": "#ff8eab",
        //   },
        },
      ],
    },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}

