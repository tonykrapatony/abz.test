/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F4E041',
      secondary: '#00BDD3',
      black: 'rgba(0, 0, 0, 0.87)',
      white: '#FFF',
      gray: '#B4B4B4',
      lightGray: '#F8F8F8',
      inputColor: '#7E7E7E',
      inputBorder: '#D0CFCF',
      primaryHover: '#FFE302',
      error: '#CB3D40',
      blue: '#00BDD3',
    },
    extend: {
      spacing: {
        16: '16px',
      },
      fontSize: {
        sm: '12px',
        md: '16px',
        lg: '40px',
      },
      fontFamily: {
        nunito: '"Nunito", sans-serif'
      }
    },
    corePlugins: {
      textOpacity: false,
    },
  },
  plugins: [],
}

