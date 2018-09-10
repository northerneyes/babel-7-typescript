const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')

const express = require('express')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const webpackDevConfig = require('../webpack.dev.config')

const router = express.Router()

const compiler = webpack(webpackDevConfig)
compiler.apply(new FriendlyErrorsWebpackPlugin())
router.use(
  webpackDev(compiler, {
    headers: { 'Access-Control-Allow-Origin': '*' },
    quiet: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    },
    publicPath: webpackDevConfig.output.publicPath
  })
)

router.use(
  webpackHot(compiler, {
    log: () => {} // don't know what it is but it is important stuff
  })
)

module.exports = router
