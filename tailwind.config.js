module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e59100',
        'secondary': '#08927e',
        'accent': '#77fd3e',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/images/baobab2.jpg')",
       })
    },
  },
  plugins: [],
}
