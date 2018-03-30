const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge({
    plugins: [
      new UglifyJSPlugin({
        test: /\.js$/,
        parallel: 4
      }),
    ],
  }, webpackConfig);