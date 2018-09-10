const webpack = require('webpack')

const constants = require('./constants')
const { vendor } = require('./webpack.vendor')

module.exports = {
  entry: {
    vendor
  },
  mode: 'development',
  output: {
    filename: '[name].lib.js',
    path: constants.BUILD_DIR,
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: `${constants.BUILD_DIR}/[name]-manifest.json`
    })
  ]
}
