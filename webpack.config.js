const path = require('path');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: './frontend/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
  },
  module: {
    rules: [{
      //loader: 'babel-loader',
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    },
    {
      test: /\.css$/i,
      //test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  devServer: {
    //hot: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, '/'),
      publicPath: '/',
    },
    proxy: {
      '/post': {
        target: 'http://localhost:3000/'
		  },
      '/login': {
        target: 'http://localhost:3000/'
		  },
      '/homepage': {
        target: 'http://localhost:3000/'
      },
	  }
  },
}
