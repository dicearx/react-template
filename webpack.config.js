const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST, // Defaults to `localhost`
    open: true, // Open the page in browser
    overlay: true,
    port: process.env.PORT, // Defaults to 8080
    publicPath: '/',
    stats: 'errors-only', // Display only errors to reduce the amount of output.
  },
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
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
