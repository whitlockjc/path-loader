'use strict';

var path = require('path');

module.exports = [{
  devtool: 'inline-source-map',
  entry: './index.js',
  mode: 'development',
  name: 'path-loader',
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'path-loader.js',
    library: 'PathLoader'
  }
}, {
  entry: './index.js',
  mode: 'production',
  name: 'path-loader-min',
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'path-loader-min.js',
    library: 'PathLoader'
  }
}];
