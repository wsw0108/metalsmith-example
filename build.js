const Metalsmith = require('metalsmith')
const rootpath = require('metalsmith-rootpath')
const assets = require('metalsmith-assets')
const layouts = require('metalsmith-layouts')
const debug = require('metalsmith-debug')
const i18n = require('./i18n')

Metalsmith(__dirname)
  .use(i18n({
    locales: ['en', 'zh']
  }))
  .use(rootpath())
  .use(layouts('handlebars'))
  .use(assets())
  .use(debug())
  .build(function (err) {
    if (err) throw err
    console.log('Build finished!')
  })
