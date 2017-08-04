const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')

Metalsmith(__dirname)
  .metadata({
    locale: 'en'
  })
  .use(layouts('handlebars'))
  .destination('../site-example/example1')
  .build(function(err) {
    if (err) throw err
    console.log('Build finished!')
  })