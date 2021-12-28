module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        "bg-1":"url('/bg(1)')"
      },
      colors:{
        "light-100":"#BBE1FA",
        "light-200":"#3282B8",
        "dark-100":"#0F4C75",
        "dark-200":"#1B262C",
        "light":"#eaf5fc",
      }
    },
  },
  plugins: [],
}
