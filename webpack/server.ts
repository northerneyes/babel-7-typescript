import webpack, { Configuration } from 'webpack'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

import express from 'express'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

import webpackDevConfig from '../webpack.dev.config'
const webpackConfig = webpackDevConfig as Configuration

const router = express.Router()
console.log(webpackDevConfig)
const compiler = webpack(webpackConfig)
compiler.apply(new FriendlyErrorsWebpackPlugin())
router.use(
  webpackDev(compiler, {
    headers: { 'Access-Control-Allow-Origin': '*' },
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
    // tslint:disable-next-line:no-empty
    log: () => {} // don't know what it is but it is important stuff
  })
)

export default router
