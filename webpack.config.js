const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    ],
  },
  devServer: {
    hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, '/client'),
    },
    proxy: {
      '/': 'http://localhost:3000',
      '/post': {
        target: 'http://localhost:3000/',
      },
      '/login': {
        target: 'http://localhost:3000/',
      },
      '/homepage': {
        target: 'http://localhost:3000/',
      },
    },
  },
};
