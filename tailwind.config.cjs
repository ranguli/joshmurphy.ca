/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: '#ffffff',
      background: "#131111",
      link: "#587B7F",
      myrtlegreen: "#587B7F",
    },
    fontFamily: {
      sans: ["Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro"],
      mono: ["ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"]
    },
    extend: {
      typography: ({ theme }) => ({
            joshmurphyca : {
              css: {
                '--tw-prose-body': theme('colors.white'),
                '--tw-prose-headings': theme('colors.myrtlegreen'),
                '--tw-prose-lead': theme('colors.myrtlegreen'),
                '--tw-prose-links': theme('colors.myrtlegreen'),
                '--tw-prose-bold': theme('colors.white'),
                '--tw-prose-quotes': theme('colors.myrtlegreen'),
                '--tw-prose-code': theme('colors.white'),
                '--tw-prose-pre-code': theme('colors.white'),
              },
            },
      }), 
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
