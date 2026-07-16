/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#141432', light: '#1e1e48', lighter: '#2a2a5e' },
        gold: { DEFAULT: '#D9A62E', light: '#F0C75E', pale: '#FBF3DF' },
        brand: { blue: '#2A4DD0', green: '#2F9E63', red: '#D62828' },
        paper: '#FFFFFF',
        ink: '#23233B',
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
