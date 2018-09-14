const path = require('path')
const webpack = require('webpack')
const constants = require('./constants')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const nodeEnv = 'development'

console.log('Compiling client development version')

const devtools = 'eval'

const plugins = [
  new webpack.LoaderOptionsPlugin({
    debug: true,
    // Webpack 2 no longer allows custom properties in configuration.
    hotPort: constants.HOT_RELOAD_PORT
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
      IS_BROWSER: true
    }
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require(`${constants.BUILD_DIR}/vendor-manifest.json`) // eslint-disable-line import/no-dynamic-require
  }),
  new FriendlyErrorsWebpackPlugin()
]

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
    babelrc: false,
    presets: [
      '@babel/typescript',
      '@babel/react',
      [
        '@babel/env',
        {
          targets: { browsers: ['last 2 versions'] },
          modules: false
        }
      ]
    ],
    plugins: [
      'react-hot-loader/babel',
      '@babel/plugin-proposal-class-properties'
    ]
  }
}

module.exports = {
  name: 'client',
  devtool: devtools,
  mode: 'development',
  optimization: {
    noEmitOnErrors: true
  },
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(constants.SRC_DIR, 'index.tsx')
    ]
  },
  output: {
    path: constants.BUILD_DIR,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: `/`
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: babelLoader
      }
    ]
  },
  plugins,
  performance: {
    hints: false
    // TODO: Reenable it once Webpack 2 will complete dead code removing.
    // hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules', 'bower_components']
  }
}
