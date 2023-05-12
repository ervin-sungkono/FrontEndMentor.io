/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6.25rem',
      },
    },
    extend: {
      colors: {
        'dark-blue': '#324152',
        'grayish-blue': '#67727e',
        'light-gray': '#eaecf1',
        'very-light-gray': '#f5f6fa',
        'moderate-blue': '#5457b6',
        'soft-red': '#ed6468',
        'light-grayish-blue': '#c3c4ef',
        'pale-red': '#ffb8bb'
      },
    },
  },
  plugins: [],
}
