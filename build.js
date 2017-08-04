const Metalsmith = require('metalsmith')
const rootpath = require('metalsmith-rootpath')
const assets = require('metalsmith-assets')
const layouts = require('metalsmith-layouts')
const debug = require('metalsmith-debug')

Metalsmith(__dirname)
  .metadata({
    locale: 'en'
  })
  .use(rootpath())
  .use(layouts('handlebars'))
  .use(assets({
    source: 'assets'
  }))
  .destination('../site-example/example1')
  .use(debug())
  .build(function(err) {
    if (err) throw err
    console.log('Build finished!')
  })