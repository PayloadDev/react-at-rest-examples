var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    addressbook: __dirname + '/src/addressbook/index.jsx'
  },
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'public/dist'),
    pathinfo: true,
    filename: '[name].js'
  },
  resolve: {
    root: [
      __dirname,
      path.resolve('./node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
