/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fuse-purple': {
          DEFAULT: '#6B46C1',
          light: '#9F7AEA',
          dark: '#553C9A',
        },
      },
    },
  },
  plugins: [],
} 