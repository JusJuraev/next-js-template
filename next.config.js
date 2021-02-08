const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  distDir: 'build',

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    config.resolve.modules.push(path.resolve('./src'))

    return config
  },

  i18n: {
    locales: ['ru', 'uz', 'en'],
    defaultLocale: 'ru',
  }
})
