var webpack = require( 'webpack' )
var path = require( 'path' )
var jsonLoader = require('json-loader');

var BUILD_DIR = path.resolve(__dirname, 'public')
var APP_DIR = path.resolve(__dirname, 'app')
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {include: /\.json$/, loaders: ['json-loader']}
    ]
  }
}

module.exports = config
