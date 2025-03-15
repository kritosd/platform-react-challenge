const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack')
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: ""
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      Components: path.resolve(__dirname, 'src/Components'),
      Pages: path.resolve(__dirname, 'src/Pages'),
      Models: path.resolve(__dirname, 'src/Models'),
      Context: path.resolve(__dirname, 'src/Context'),
      HOC: path.resolve(__dirname, 'src/HOC'),
      Services: path.resolve(__dirname, 'src/Services'),
      Widgets: path.resolve(__dirname, 'src/Widgets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
    })
  ],
  devServer: {
    historyApiFallback: true,
    client: {
      overlay: false,
    },
    open: ['/home'],
  },
};
