const Metalsmith = require('metalsmith')
const rootpath = require('metalsmith-rootpath')
const assets = require('metalsmith-assets')
const layouts = require('metalsmith-layouts')
const debug = require('metalsmith-debug')

Metalsmith(__dirname)
  .use(rootpath())
  .use(layouts('handlebars'))
  .use(assets({
    source: 'assets'
  }))
  .use(debug())
  .build(function(err) {
    if (err) throw err
    console.log('Build finished!')
  })