const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#181921', // Add your custom background color here
      },
      fontFamily: {
        primary: 'Montserrat',
        secondary: 'Montserrat',
      },
      screens: {
        sm: '600px',
        md: '868px',
        lg: '1024px',
        xl: '1298px',
      },
      colors: {
        primary: '#181921',
        grey: '#D2D3E1',
        grey2: '#242834',
        lightgrey: '#B5B8C9',
        btn: '#4F93FF',
        green: '#20D533',
        statusGreen: '#40BA2C',
        zIndex: {
          '100': '100',
        },
      },
    },
  },
  darkMode: 'dark',
};
