import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0c1e42',
        ink: '#050914',
        orange: '#d95f1a',
        ember: '#ff7a1a',
        copper: '#b94716',
        paper: '#f8f7f4',
        'paper-2': '#f1efe9',
        muted: '#7a8599',
        border: '#e4e1d8',
      },
      fontFamily: {
        cormorant: ['var(--font-display)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        forge: '0 2px 16px rgba(12,30,66,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
