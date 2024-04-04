import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // fontFamily: {
      //   // ... more custom colors
      //   // sans: ['milliard-regular'],
      //   pacifico: "milliard",
      //   // milliard_regular: 'milliard-regular',
      // },
      colors: {
        primary: '#51517b',
        secondary: '#FFCA00',
        default: '#FFFFFF',
        black: '#333E49',
        blue: '#4385E0',
        light_blue: '#00B7CD',
        orange: '#FF5E16',
        purple: '#4D52B1',
        technology: '#5ac8fa',
        lifeStyle: '#3cd289',
        sports: '#ff4f00',
        // ... more custom colors
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
