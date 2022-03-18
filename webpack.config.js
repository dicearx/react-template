const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST, // Defaults to `localhost`
    overlay: true,
    open: true, // Open the page in browser
    publicPath: '/',
    port: process.env.PORT, // Defaults to 8080
    stats: 'errors-only', // Display only errors to reduce the amount of output.
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve('./build'),
    publicPath: './',
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Airstream Account Linking',
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './assets/**/*' }],
    }),
    new WebpackNotifierPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
}
