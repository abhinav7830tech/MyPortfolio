/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F1117',
        card: '#1A1D27',
        accent: '#00C896',
        'accent-dim': 'rgba(0, 200, 150, 0.15)',
        'accent-glow': 'rgba(0, 200, 150, 0.3)',
        foreground: '#F5F5F5',
        muted: '#A0A4B0',
        amber: '#FFB347',
        'amber-dim': 'rgba(255, 179, 71, 0.15)',
        border: 'rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 12s linear infinite reverse',
        'spin-medium': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
