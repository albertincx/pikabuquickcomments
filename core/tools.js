const ExtractTextPlugin = require('extract-text-webpack-plugin')
exports.cssLoaders = (options = {}) => {
  let loaders = {}
  let prePprocessors = {
    css: {},
    postcss: {},
    less: { loader: 'less'},
    sass: { loader:'sass', options: { indentedSyntax: true } },
    scss: { loader:'sass' },
    stylus: { loader: 'stylus' },
    styl: { loader: 'stylus' }
  }
  for(let key in prePprocessors) {
    let loader = [{
      loader: 'css-loader',
    }]
    if (prePprocessors[key].loader) {
      loader.push({
        loader: prePprocessors[key].loader + '-loader',
        options: Object.assign({}, prePprocessors[key].options, { sourceMap: options.sourceMap })
      })
    }
    if (options.extract) {
      loaders[key] = ExtractTextPlugin.extract({ use: loader, fallback: 'vue-style-loader' })
    } else {
      loaders[key] = ['vue-style-loader'].concat(loader)
    }
  }
  return loaders;
}
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
