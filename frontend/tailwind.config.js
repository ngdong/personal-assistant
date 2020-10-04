const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = (isProd) => ({
  purge: {
    enabled: isProd,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    fontFamily: {
      header: [
        'Sansita Swashed'
      ]
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
      backgroundImage: theme => ({
        'app-wrapper': "url('/assets/images/background.png')"
      }),
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus'],
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
});
