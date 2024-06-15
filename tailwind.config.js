/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myorange: {
          300: '#e9ab53',
        },
        myred: {
          400: 'hsl(5, 85%, 63%)'
        },
        myblue: {
          900: 'hsl(240, 100%, 5%)',
          700: 'hsl(236, 13%, 42%)',
          400: 'hsl(233, 8%, 79%)',
        },
      },
      fontFamily: {
       'mysans': ['Inter'],
       'jos': ['"Josefin Sans"']
      }
    },
  },
  plugins: [],
}

