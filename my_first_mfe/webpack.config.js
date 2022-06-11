const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "/src/index.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [
        ".jsx",
        ".js"
    ]
  },
  devServer: {
    port: 3001
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    })
  ],
};