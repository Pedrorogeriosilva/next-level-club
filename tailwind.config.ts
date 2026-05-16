import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#020F0B',
        petroleum: '#002B20',
        deep: '#063D2E',
        machine: '#0B3A2C',
        gold: '#D4AF37',
        goldLight: '#F5D77A',
        goldDark: '#9C7628',
        warm: '#F8F5EC',
        premiumGray: '#D8D8D8',
        mutedGray: '#6F756F',
      },
    },
  },
  plugins: [],
} satisfies Config
