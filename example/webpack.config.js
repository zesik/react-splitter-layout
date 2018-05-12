const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: [
    './javascripts/index.jsx'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  }
};
