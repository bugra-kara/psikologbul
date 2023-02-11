/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        xsx: '0.6rem',
        xlx: '1.35rem',
        date: '40px',
        day: '13px',
        small: '11px',
        head: '15px',
        most: '1.125rem',
        extrasmall: '10px'
      },
      colors: {
        'palatte-1' : '#1D2F6F',
        'palatte-2' : '#8390FA',
        'palatte-3' : '#FAC748',
        'palatte-4' : '#F9E9EC',
        'palatte-5' : '#F88DAD',
      }
    },
  }
}
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'palatte-1' : '#1D2F6F',
      'palatte-2' : '#8390FA',
      'palatte-3' : '#FAC748',
      'palatte-4' : '#F9E9EC',
      'palatte-5' : '#F88DAD',
      'palatte-6' : '#fb8500',
      'palatte-7' : '#90be6d',
      'palatte-8' : '#00b4d8',
      "fb" : "#4267b2",
      "tw" : "#00acee",
      "ln" : "#0072b1",
      "wp" : "#1e7d34",
      "reddit" : "#ED001C"
    },
    fontSize: {
      xsx: '0.6rem',
      xlx: '1.35rem',
      date: '40px',
      day: '12px',
      small: '11px',
      head: '15px',
      most: '1.125rem',
      extrasmall: '10px'
    },
    extend: {},
  },
  plugins: [],
});
