module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        // Clarity Stack (Light Mode) - LJS Corporate
        'paper': '#FFFEF9',
        'whiteboard': '#F7F6F3',
        'charcoal': '#2C2C2C',
        'pencil': '#6B6B6B',
        // Signal Orange (Primary Accent)
        'signal': '#E85D00',
        'signal-muted': '#D4722A',
        // Status Colors
        'proceed': '#3D7A4A',
        'modify': '#E85D00',
        'stop': '#CC3333',
      }
    }
  },
  daisyui: {
    themes: [
      {
        ljs: {
          'primary': '#E85D00',           // Signal Orange
          'primary-content': '#FFFEF9',   // Paper White text on primary
          'secondary': '#2C2C2C',         // Charcoal
          'secondary-content': '#FFFEF9', // Paper White text on secondary
          'accent': '#3D7A4A',            // Proceed green
          'accent-content': '#FFFEF9',
          'neutral': '#6B6B6B',           // Pencil Gray
          'neutral-content': '#FFFEF9',
          'base-100': '#FFFEF9',          // Paper White
          'base-200': '#F7F6F3',          // Whiteboard
          'base-300': '#E8E7E3',          // Slightly darker
          'base-content': '#2C2C2C',      // Charcoal
          'info': '#3B82F6',
          'success': '#3D7A4A',           // Proceed
          'warning': '#E85D00',           // Signal Orange
          'error': '#CC3333',             // Stop
        }
      }
    ]
  }
}
