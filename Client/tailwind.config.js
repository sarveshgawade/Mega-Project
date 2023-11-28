module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nav: '#6c2bd9'},
      backgroundImage: {
        'wave': "url('./Assets/wave.svg')",
        'back':"url('./Assets/back.svg')",
        'log':"url('./Assets/login.svg')",
      },
    },
  },
  daisyui: {
    themes:["light"]
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
};
