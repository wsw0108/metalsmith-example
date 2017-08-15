const path = require('path')
const i18next = require('i18next')
const Backend = require('i18next-sync-fs-backend')

function i18n (options = {}) {
  options = Object.assign({
    locales: [],
    fallbackLng: false,
    loadPath: './locales/{{lng}}/{{ns}}.json'
  }, options)

  i18next
    .use(Backend)
    .init({
      initImmediate: false,
      lng: options.locales[1],
      fallbackLng: options.fallbackLng,
      preload: options.locales,
      backend: {
        loadPath: options.loadPath
      }
    })

  function helper (locale) {
    function t (key) {
      const params = {
        lng: locale()
      }
      return i18next.t(key, params)
    }
    return { t: t }
  }

  return function (files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
      options.locales.forEach(function (locale) {
        const data = Object.assign({}, files[file])
        const p = path.join(locale, file)
        data.locale = locale
        const h = helper(() => locale)
        data.t = h.t
        data.i18nOrigPath = file
        files[p] = data
      })
      delete files[file]
    })
    done()
  }
}

module.exports = i18n
