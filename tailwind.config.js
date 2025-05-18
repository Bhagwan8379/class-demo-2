/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFBF5',
        'cream-100': '#FFF8ED',
        'cream-200': '#FFF5E5',
        gold: {
          DEFAULT: '#E6C068',
          50: '#FCF8EF',
          100: '#F9F2DF',
          200: '#F3E5BF',
          300: '#EED89F',
          400: '#E9CC7F',
          500: '#E6C068',
          600: '#DFB043',
          700: '#C99B26',
          800: '#A47C1F',
          900: '#7F5E18',
        },
        brown: {
          50: '#F8F5F2',
          100: '#F2ECE5',
          200: '#E5D9CC',
          300: '#D9C6B2',
          400: '#C2A483',
          500: '#AB8254',
          600: '#8A6942',
          700: '#684F32',
          800: '#533F28',
          900: '#3C2A21',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};