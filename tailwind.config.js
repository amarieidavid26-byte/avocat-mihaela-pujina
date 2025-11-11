/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: '#87A96B',
          light: '#A8C09E',
          dark: '#6B8A54',
        },
        terracotta: {
          DEFAULT: '#C65D00',
          dark: '#A04B00',
          light: '#E07A1F',
        },
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#FEFEF9',
        },
        charcoal: {
          DEFAULT: '#36454F',
          light: '#4A5A65',
        },
        offwhite: '#FAFAF8',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
