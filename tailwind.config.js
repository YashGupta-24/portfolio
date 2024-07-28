/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#DAE2F8",
        secondary:"#D6A4A4",
        tertiary:"#A3333D",
        heading:"#011638",
        hover:"#591c21"
      }
    },
    fontFamily:{
      logo: ["Ramaraja", "serif"],
      heading:["Libre Caslon Text", "serif"],
      body:["Antic Didone", "serif"]
    }
  },
  plugins: [],
}