module.exports = (isProd) => ({
  purge: {
    enabled: isProd,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
});
