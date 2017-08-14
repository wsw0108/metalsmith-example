const path = require('path')
const Metalsmith = require('metalsmith')
const i18n = require('metalsmith-i18next')
const rootpath = require('metalsmith-rootpath')
const assets = require('metalsmith-assets')
const layouts = require('metalsmith-layouts')
const debug = require('metalsmith-debug')

Metalsmith(__dirname)
  .use(i18n({
    path: ':locale' + path.sep + ':file',
    locales: ['en', 'zh']
  }))
  .use(rootpath())
  .use(layouts('handlebars'))
  .use(assets())
  .use(debug())
  .build(function(err) {
    if (err) throw err
    console.log('Build finished!')
  })