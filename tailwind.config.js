/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#33DFFF',
          DEFAULT: '#00D8FF',
          dark: '#00B8D9',
        },
        secondary: {
          light: '#FFD633',
          DEFAULT: '#FFCC00',
          dark: '#E6B800',
        },
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          border: '#2E2E2E',
          text: '#F0F0F0',
          'text-secondary': '#A0A0A0',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F8F8F8',
          border: '#F0F0F0',
          text: '#000000',
          'text-secondary': '#666666',
        }
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00D8FF, #FFCC00)',
        'gradient-primary-hover': 'linear-gradient(to right, #33DFFF, #FFD633)',
      }
    },
  },
  plugins: [],
}

