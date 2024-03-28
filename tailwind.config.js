/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'custom-gradient': {
          '0': 'rgb(20, 1, 31)',
          '25': 'rgb(28, 1, 43)',
          '50': 'rgb(38, 7, 54)',
          '75': 'rgb(43, 6, 62)',
          '100': 'rgb(20, 1, 31)',
        },
      }),
      colors: {
        custom: 'rgb(38, 7, 54)', // Define your custom color here
      }
    },
  },
  plugins: [require('tailwindcss'),
  require('autoprefixer')],
}

