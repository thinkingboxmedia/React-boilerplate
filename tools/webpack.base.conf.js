
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './src/main.js',
    vendors: ['react', 'react-dom', 'react-redux', 'redux', 'react-router', 'history', 'react-f1'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'src': path.resolve(__dirname, '../src'),
    },
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')],
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot + 'src/',
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
        },
      },
    ],
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  eslint: {
    formatter: require('eslint-friendly-formatter'),
  },
}
