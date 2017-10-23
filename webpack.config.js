var webpack = require('webpack')
var path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'src/dist')
var APP_DIR = path.resolve(__dirname, 'src/app')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: './src/public'
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react'
          ]
        }
      }
    }]
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_DIR)
  ]
};

module.exports = config