module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', "sans-serif"]
      }
    }
  },
  daisyui: {
    themes: [
      'cupcake',
    ]
  }
}
