// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#ffe4f0',
          300: '#f9a8d4',
          400: '#ec4899',
          500: '#db2777',
          600: '#be185d',
        },
      },
    },
  },
  plugins: [],
};
