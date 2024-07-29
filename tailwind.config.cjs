/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: {
          // The way Tailwind works is that the higher the number on the left, the darker the shade of color.
          400: '#9ca3af',
          600: '#424242',
          700: '#262626',
          900: '#000000',
        }
      },
      fontFamily: {
        author: ['"Courier Prime", "Courier New"'],
        title: ['"Playfair Display", "Libre Baskerville", "Georgia", "serif"'],
        serif: ['"Libre Baskerville", "Georgia", "serif"'],
        sans: ['"Lato", "Helvetica", "Arial", "sans-serif"'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#000000',
              '&:hover': {
                color: '#ffffff',
              },
              '&:visited': {
                color: '#A491D3',
                
              },
            },
            // Add more customizations as needed
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, theme }) {
        addBase({
          ':root': {
            '--color-gray-400': theme('colors.gray.400'),
            '--color-gray-500': theme('colors.gray.500'),
            '--color-gray-600': theme('colors.gray.600'),
            '--color-gray-700': theme('colors.gray.700'),
            '--color-gray-900': theme('colors.gray.900'),

          },
        });
      },
  ],
};
