/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xsm: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        gloock: ['Gloock', 'serif'],
      },
      colors: {
        bg_primary: '#dcbbab',
        bg_secondary: '#4B1248',
      },
    },
  },
  plugins: [],
};
