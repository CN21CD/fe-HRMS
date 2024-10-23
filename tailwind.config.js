/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#ff7b1d',
        'primary-black': '#333',
        'primary-gray': '#999',
        'primary-light-gray': '#eee',
      },
      fontFamily: {
        Roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
