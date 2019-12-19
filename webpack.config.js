var path = require('path')

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, 'src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }]
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}
