const path = require("path"); // import path freom 'path'

const HtmlWebpackPlugin = require("html-webpack-plugin"); // import path freom 'path'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

// export default
module.exports = {
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "..//build"),
    filename: "static/js/[name].[contenthash:8].js",
    clean: true,
  },
  devtool: isProduction ? false : "eval-source-map",
  devServer: {
    //decServer오타
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true,
      progress: true,
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              // use 오타 수정
              loader: "babel-loader",
            },
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              isProduction ? MiniCssExtractPlugin.loader : "style-loader",
              "css-loader",
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    isProduction
      ? new HtmlWebpackPlugin({
          template: "public/index.html",
          minify: true,
        })
      : new HtmlWebpackPlugin({
          template: "public/index.html",
        }),
    isProduction
      ? new MiniCssExtractPlugin({
          linkType: false,
          filename: "[name].[contenthash:8].css",
        })
      : undefined,
  ].filter(Boolean),
};
