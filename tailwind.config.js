/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F97316',
          'orange-hover': '#EA580C',
          green: '#10B981',
          'green-light': '#D1FAE5',
          dark: '#1F2937',
          muted: '#6B7280',
          bg: '#FFFFFF',
          section: '#F8FAFC',
          border: '#E5E7EB',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(249, 115, 22, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(249, 115, 22, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
