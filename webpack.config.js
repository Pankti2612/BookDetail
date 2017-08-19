var webpack = require('webpack');
var watch = require('watchpack');
var path = require('path');

module.exports = {
  entry: {
    './src/index.js',
  },
  output: {
    path: "./dist",
    filename: 'bundle.js'
  },
  watch: true,
  module :{
    exclude: '/node_modules/',
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, './src/')
    }
  ],
  query: {
    query: {presets: ['react', 'es2015', 'stage-1']}
  }
},
  resolve: {
    extensions: ['', '.js', '.jsx','.css']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};