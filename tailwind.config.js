/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6f8',
          100: '#e8eaef',
          200: '#c9cdd8',
          400: '#7c8497',
          600: '#454d61',
          800: '#242a3a',
          900: '#12141d',
        },
        primary: {
          50: '#eef1fd',
          100: '#dbe2fb',
          200: '#b3c1f5',
          300: '#8a9fef',
          400: '#5a72e6',
          500: '#3d51d6',
          600: '#2e3cb3',
          700: '#28328f',
          800: '#242c70',
          900: '#1c2354',
        },
        gold: {
          50: '#fdf7e8',
          100: '#faecc2',
          300: '#f2cc60',
          400: '#eab52e',
          500: '#d99a15',
          600: '#b57b0f',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(28, 35, 84, 0.25)',
        card: '0 4px 24px -6px rgba(28, 35, 84, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
