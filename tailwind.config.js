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
        'display': ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif']
      },
      colors: {
        // Light, warm surfaces
        'paper': '#FFFDF9',
        'whiteboard': '#FAF5EC',
        'tint': '#FDEEE2',
        'charcoal': '#2C2C2C',
        'pencil': '#5F5B56',
        // Warm near-black, for the footer and the one featured card
        'ink': '#1F1B18',
        'ink-line': '#3A342F',
        'ink-text': '#EDE8E1',
        'ink-muted': '#B5ADA4',
        'go': '#2E9E5B',
        // Signal Orange (the only accent)
        'signal': '#E85D00',
        // Dark enough for body-size text on paper
        'signal-ink': '#B84A00',
        // Light enough for text on ink
        'signal-soft': '#FFB07A',
        // Status Colors
        'proceed': '#3D7A4A',
        'modify': '#E85D00',
        'stop': '#CC3333',
      }
    }
  },
  daisyui: {
    logs: false,
    themes: [
      {
        ljs: {
          'primary': '#E85D00',           // Signal Orange
          'primary-content': '#1A1A1A',   // Ink text on primary
          'secondary': '#2C2C2C',         // Charcoal
          'secondary-content': '#FFFEF9', // Paper White text on secondary
          'accent': '#3D7A4A',            // Proceed green
          'accent-content': '#FFFEF9',
          'neutral': '#6B6B6B',           // Pencil Gray
          'neutral-content': '#FFFEF9',
          'base-100': '#FFFDF9',          // Paper White
          'base-200': '#FAF5EC',          // Whiteboard
          'base-300': '#E8E7E3',          // Slightly darker
          'base-content': '#2C2C2C',      // Charcoal
          'info': '#3B82F6',
          'success': '#3D7A4A',           // Proceed
          'warning': '#E85D00',           // Signal Orange
          'error': '#CC3333',             // Stop
          '--rounded-box': '18px',
          '--rounded-btn': '10px',
          '--rounded-badge': '999px',
        }
      }
    ]
  }
}
