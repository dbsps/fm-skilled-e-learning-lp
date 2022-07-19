/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'primary': 'hsl(233, 54%, 16%)',
        'primary-hover': 'hsl(234, 25%, 52%)',
        'primary-light': 'hsl(232, 10%, 56%)',
        'accent': 'hsl(341, 92%, 62%)',
        'accent-hover': 'hsl(341, 100%, 83%)',
        'lightgradstart': 'hsl(322, 87%, 55%)',
        'lightgradend': 'hsl(13, 100%, 64%)',
        'darkgradstart': 'hsl(237, 100%m 64%)',
        'darkgradend': 'hsl(322, 87%, 55%)'
      },
      fontSize: {
        'sm': ['16px', '28px'],
        'md': ['18px', '28px'],
        'lg': ['24px', '28px'],
        'xl': ['32px', '40px'],
        '2xl': ['40px', '51px'],
        '3xl': ['56px', '70px']
      },
    extend: {
      fontFamily: {
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
