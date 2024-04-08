/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgimg: "url('/src/assets/img/c201cbc5-c4fd-4d81-bf11-e6318e750eee.webp')"
      },
      fontFamily: {
        openSans: "'Open Sans', sans-serif" 
      }
    }
  },
  plugins: [require("daisyui")]
}

