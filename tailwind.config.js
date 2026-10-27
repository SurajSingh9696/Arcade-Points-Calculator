/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        sand: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4ECE1',
          300: '#EADBC8',
          400: '#D6C0A5',
          500: '#BF9E79',
          600: '#A47D56',
          700: '#835E3B',
          800: '#64472B',
          900: '#432E1B',
        },
        arcade: {
          gold: '#F59E0B',
          amber: '#D97706',
          coral: '#EA580C',
          ruby: '#E11D48',
          emerald: '#10B981',
          jade: '#059669',
          sage: '#65A30D',
          plum: '#9333EA',
          rose: '#F43F5E',
        }
      },
      boxShadow: {
        'arcade': '0 4px 0 0 rgba(191, 158, 121, 0.4)',
        'arcade-lg': '0 8px 0 0 rgba(191, 158, 121, 0.4)',
        'arcade-amber': '0 4px 0 0 #B45309',
        'arcade-emerald': '0 4px 0 0 #047857',
        'soft': '0 10px 30px -5px rgba(180, 83, 9, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      }
    },
  },
  plugins: [],
}
