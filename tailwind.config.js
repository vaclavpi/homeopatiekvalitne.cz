/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Source Sans Pro', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0fdf4',
          800: '#166534',
        },
        violet: {
          50: '#f5f3ff',
          600: '#7c3aed',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        gray: {
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}