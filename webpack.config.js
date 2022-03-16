const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: 'index.bundle.js',
    path: path.resolve('./build'),
    publicPath: './'
  },
  devServer: {
    historyApiFallback: true,
    host: process.env.HOST, // Defaults to `localhost`
    open: true, // Open the page in browser
    overlay: true,
    port: process.env.PORT, // Defaults to 8080
    publicPath: '/',
    stats: "errors-only", // Display only errors to reduce the amount of output.
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Airstream Account Linking",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new WebpackNotifierPlugin(),
  ],
}
