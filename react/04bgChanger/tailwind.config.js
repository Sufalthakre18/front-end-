/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project structure
  ],
  theme: {
    extend: {
      textShadow: {
        default: '1px 1px 0 rgba(0, 0, 0, 0.1)',
        md: '2px 2px 0 rgba(0, 0, 0, 0.2)',
        lg: '3px 3px 0 rgba(0, 0, 0, 0.3)',
        xl: '4px 4px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const textShadowUtilities = {
        '.text-shadow-default': {
          textShadow: '1px 1px 0 rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 0 rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 0 rgba(0, 0, 0, 0.3)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 0 rgba(0, 0, 0, 0.4)',
        },
      };

      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
  ],
}

