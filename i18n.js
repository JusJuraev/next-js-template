const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ru',
  localeSubpaths: {
    en: 'en',
    uz: 'uz'
  },
  otherLanguages: ['uz', 'en']
})

module.exports = NextI18NextInstance
