/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins','sans-serif']
      },
      margin:{
        '-10': '-10px',
      },
      textShadow:{
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        xl: '5px 5px 10px rgba(0, 0, 0, 0.5)',
      },
      placeholderColor: {
        'primary': '#3490dc', // Example primary color
        'secondary': '#ffed4a', // Example secondary color
        'danger': '#e3342f', // Example danger color
      }
    },
  },
  variants: {
    extend: {
      placeholderColor: ['responsive', 'focus'], // Add variants if needed
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-xl': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
    function({ addUtilities }) {
      addUtilities({
        '.placeholder-primary::placeholder': {
          color: '#3490dc',
        },
        '.placeholder-secondary::placeholder': {
          color: '#ffed4a',
        },
        '.placeholder-danger::placeholder': {
          color: '#e3342f',
        },
      }, ['responsive', 'focus']);
    }
  ],
  corePlugins: {
    readOnly: true, // Enable the `read-only` utility class
  },
}