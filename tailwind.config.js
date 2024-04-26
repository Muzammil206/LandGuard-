
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/171328/pexels-photo-171328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'large': "url('https://img.freepik.com/free-vector/white-monochrome-background-paper-style_23-2148999903.jpg?w=740&t=st=1714047465~exp=1714048065~hmac=dd08e4b8d911940b8bf7e276869628691344702d722969e358f1514bf3634aa7')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}