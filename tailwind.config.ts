import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    
    extend: {
      colors: {
        'norman-blue' : '#243c5a'
      }
    },
  },
  plugins: [
    require('daisyui'),

  ],
} satisfies Config