/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: {
          600: '#D62828',
          700: '#B71C1C'
        },
        zinc: {
          700: '#2A2A2A',
          800: '#1F1F1F',
          900: '#1A1A1A'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      }
    },
  },
  plugins: [],
};