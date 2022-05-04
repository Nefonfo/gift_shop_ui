module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.pug',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Roboto', 'ui-sans-serif', 'serif'],
      'serif': ['Roboto Slab', 'ui-sans-serif', 'serif']
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
