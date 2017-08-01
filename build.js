const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')

Metalsmith(__dirname)
  .use(layouts('handlebars'))
  .build(function(err) {
    if (err) throw err
    console.log('Build finished!')
  })