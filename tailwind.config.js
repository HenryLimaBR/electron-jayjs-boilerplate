/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,tsx,jsx,md,mdx}",
    "./node_modules/@jay-js/ui/**/*.styled"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#05B48A",
          "primary-focus": "#02CC9A",
          "primary-content": "#ffffff",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#05B48A",
          "primary-focus": "#02CC9A",
          "primary-content": "#ffffff"
        }
      }
    ]
  }
}