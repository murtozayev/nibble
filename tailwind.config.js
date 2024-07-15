/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"]
      },
      screens: {
        "laptop": {
          max: "2049px",
          min: "1000px"
        },
        "tablet": {
          max: "900px",
          min: "600px"
        },
        "phone": {
          max: "480px"
        }
      }
    },
  },
  plugins: [],
}