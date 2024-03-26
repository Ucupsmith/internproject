const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './app/*/.{js,ts,jsx,tsx}',
    './pages/*/.{js,ts,jsx,tsx}',
    './components/*/.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      textShadow: {
        purple:
          '-1px -1px 0 #7555DA, 1px -1px 0 #7555DA, -1px 1px 0 #7555DA, 1px 1px 0 #7555DA',
        white:
          '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white'
      },
      colors: {
        'seeds-purple': '#7555DA',
        'seeds-purple-2': '#9A76FE',
        'seeds-green': '#4FE6AF',
        'seeds-button-green': '#3AC4A0',
        'seeds-green-2': '#DCFCE4',
        'neutral-medium': '#262626',
        'neutral-soft': '#7C7C7C',
        'neutral-ultrasoft': '#CCCCCC',
        'warning-hard': '#DD2525'
      },
      backgroundImage: {
        hello: "url('../src/assets/hello.png')",
        'ellipse-purple': "url('../src/assets/ellipse-purple.png')",
        'quiz-gradient': 'linear-gradient(88deg, #10A8AD 0%, #79F0B8 137.56%)'
      },
      backgroundSize: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        '120%': '120%',
        '140%': '140%',
        '160%': '160%',
        '180%': '180%'
      },
      rotate: {
        270: '270deg'
      },
      boxShadow: {
        center: '0 0px 1px 1px rgba(0, 0, 0, 0.05)'
      },
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
        'slide-up': 'slide-up 300ms ease-out forwards',
        'fade-in-slide': 'fade-in-slide 1000ms ease-out forwards',
        'fade-out-slide': 'fade-out-slide 1000ms ease-out forwards',
        'fade-in': 'fade-in 300ms ease-out forwards',
        spinner: 'spinner 800ms ease-in-out infinite',
        'bounce-horizontal': 'bounce-horizontal 2000ms infinite',
        'bounce-reverse': 'bounce-reverse 2000ms infinite'
      },
    }
  },
  plugins: [require('tailwindcss-textshadow')] [require("daisyui")]
  
});