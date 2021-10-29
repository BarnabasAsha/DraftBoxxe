module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: 'repeat(auto-fit, minmax(10rem, 1fr))'
      },
      colors: {
        primary: '#5039EB',
        secondary: '#2D3139',
        tertiary: '#FEFFFE',
        dark: '#000505'
      },
      height: {
        xx: '90%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
