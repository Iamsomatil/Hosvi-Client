/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hosvi: {
          bg: '#ffffff', // overall page background
          surface: '#f9fafb', // cards/sections
          text: '#0f172a', // main text (slate-900-ish)
          muted: '#6b7280', // muted text (gray-500-ish)
          primary: '#2563eb', // primary Hosvi blue (buttons, links)
          'primary-hover': '#1d4ed8', // darker blue for hover states
          accent: '#f97316', // subtle accent (small highlights)
          border: '#e5e7eb', // borders/dividers
        },
      },
    },
  },
  plugins: [],
};
