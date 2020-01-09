const slugify = require('slugify')
const authors = require('./authors')

module.exports = function(api) {
  api.onCreateNode(options => {
    if (options.internal.typeName === 'Author') {
      options.slug = slugify(String(options.title).toLowerCase())
      const author = authors.find(i => i.id === options.title)
      if (author) {
        options.id = author.id
        options.name = author.name
        options.link = author.link
        options.avatar = author.avatar
      }
    }

    if (options.internal.typeName === 'Tag') {
      options.slug = slugify(String(options.title).toLowerCase())
      options.title = String(options.title).toLowerCase()
    }

    return { ...options }
  })
}
