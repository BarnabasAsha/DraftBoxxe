module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: 'repeat(auto-fit, minmax(18rem, 18rem))'
      },
      colors: {
        primary: '#221f1f',
        secondary: '#111010',
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
