import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#010B09',
        petroleum: '#042117',
        deep: '#113929',
        machine: '#113929',
        brown: '#35170E',
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
