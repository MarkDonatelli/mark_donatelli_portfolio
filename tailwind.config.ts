import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        aze: ['var(--font-aze)', 'monospace']
      },
      colors: {
        navy: {
          dark: '#0b0d17',
          medium: '#1a2740',
          light: '#0f1e33'
        },
        accent: {
          teal: '#4ade80',
          blue: '#38bdf8',
          red: '#ef4444'
        },
        neutral: {
          lightGray: '#d1d5db',
          warmWhite: '#f3f4f6',
          mutedGray: '#6b7280',
          lightBeige: '#f6f3ec'
        }
      },
      backgroundImage: {
        'custom-gradient-light':
          'linear-gradient(120deg, #f6f3ec, #fbf9f4, #f9f7f0)',
        'custom-gradient-dark':
          'linear-gradient(120deg, #0b0d17, #1a2740, #162030)'
      }
    }
  },
  plugins: []
} satisfies Config;
