/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: ["hover:bg-[#12627d]", "bg-[#1788ae]"],
  theme: {
    extend: {
      transitionTimingFunction: {
        jump: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      },
      fontFamily: {
        spartan: ['"League Spartan"', "sans-serif"],
        merriweather: ['"Merriweather"', "serif"],
        nunito: ['"Nunito"', "sans-serif"],
        russo: ['"Russo One"', "sans-serif"]
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      },
      animation: {
        slideInLeft: "slideInLeft 0.2s ease-in-out forwards"
      }
    }
  },
  plugins: []
};
