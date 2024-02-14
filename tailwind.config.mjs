import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
    './misc/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.{js,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Aeonik Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Aeonik Pro"', ...defaultTheme.fontFamily.serif],
      mono: ['"Aeonik Mono"', ...defaultTheme.fontFamily.mono],
    },

    extend: {
      colors: {
        black: '#111111',
        'frax-gray': {
          50: 'rgb(var(--frax-gray-50) / <alpha-value>)',
          100: 'rgb(var(--frax-gray-100) / <alpha-value>)',
          150: 'rgb(var(--frax-gray-150) / <alpha-value>)',
          200: 'rgb(var(--frax-gray-200) / <alpha-value>)',
          300: 'rgb(var(--frax-gray-300) / <alpha-value>)',
          400: 'rgb(var(--frax-gray-400) / <alpha-value>)',
          500: 'rgb(var(--frax-gray-500) / <alpha-value>)',
          600: 'rgb(var(--frax-gray-600) / <alpha-value>)',
          700: 'rgb(var(--frax-gray-700) / <alpha-value>)',
          800: 'rgb(var(--frax-gray-800) / <alpha-value>)',
          900: 'rgb(var(--frax-gray-900) / <alpha-value>)',
          1e3: 'rgb(var(--frax-gray-1000) / <alpha-value>)',
          1100: 'rgb(var(--frax-gray-1100) / <alpha-value>)',
          1200: 'rgb(var(--frax-gray-1200) / <alpha-value>)',
          1300: 'rgb(var(--frax-gray-1300) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
