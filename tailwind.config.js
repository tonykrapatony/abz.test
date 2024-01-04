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
        7: '7px',
        16: '16px',
        26: '26px',
        34: '34px',
        54: '54px',
        70: '70px',
        77: '77px',
        83: '83px',
        100: '100px',
        104: '104px',
        140: '140px',
        254: '254px',
        282: '282px',
        297: '297px',
        328: '328px',
        344: '344px',
        370: '370px',
        380: '380px',
        704: '704px',
        904: '904px',
        1170: '1170px',
      },
      fontSize: {
        sm: '12px',
        md: '16px',
        lg: '40px',
      },
      lineHeight: {
        '14': '14px',
        '26': '26px',
        '40': '40px',
      },
      fontFamily: {
        nunito: '"Nunito", sans-serif'
      },
      padding: {
        '3px': '3px',
        '5px': '5px',
        '60px': '60px',
        '13px': '13px',
        '18px': '18px',
        '19px': '19px',
        '71px': '71px'
      },
      borderRadius: {
        '10px': '10px',
        '80px': '80px',
      },
      gap: {
        '7': '7px',
        '21': '21px',
        '29': '29px',
        '50': '50px',
        '140': '140px',
      },
      content: {
        'empty': '""',
      },
    },
    corePlugins: {
      textOpacity: false,
    },
  },
  plugins: [],
}

