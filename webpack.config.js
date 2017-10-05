const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'react-splitter-layout',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    'prop-types': 'prop-types'
  }
};
