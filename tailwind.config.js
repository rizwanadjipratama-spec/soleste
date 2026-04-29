/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F9E6B3',
          dark: '#A67C00',
        },
        marble: '#FDFBF7',
        emerald: {
          DEFAULT: '#013220',
          dark: '#002216',
        }
      }
    },
  },
  plugins: [],
}
