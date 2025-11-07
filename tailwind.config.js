/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#a540f3',
        'main-2': '#5110e8',
        'main-10': '#F6ECFE',
        'main-hover': '#F7F7FD',
        neutral: '#79767D',
        black: '#0E0E0E',
        'black-shade': '#79767D',
        'black-10': '#EEE7FF',
      },
      backgroundImage: {
        ai: 'linear-gradient(180deg, #A540F3 0%, #5110E8 100%)',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        'corner-large': '16px',
        'corner-medium': '12px',
        'corner-small': '8px',
      },
      fontFamily: {
        'plus-jakarta-sans': ['plus-jakarta-sans', 'sans-serif'],
      },
      fontSize: {
        '10px': [
          '0.625rem',
          {
            lineHeight: '0.8125rem',
          },
        ],
        '11px': [
          '0.6875rem',
          {
            lineHeight: '1.031rem',
          },
        ],
        xs: [
          '0.75rem',
          {
            lineHeight: '1.2rem',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.4rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.35rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
