/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#16324A', light: '#1E4160', lighter: '#2A567C' },
        accent: { DEFAULT: '#0F8A7A', light: '#12A390', pale: '#E9F5F2', dark: '#085041' },
        brand: { blue: '#2A4DD0', green: '#2F9E63', red: '#D62828' },
        paper: '#FFFFFF',
        ink: '#2A3844',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      maxWidth: { site: '76rem' },
    },
  },
  plugins: [],
};
