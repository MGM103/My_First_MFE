const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    output: {
      publicPath: "http://localhost:3001/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },
    devServer: {
      open: true,
      port: 3001,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'example',
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
            remote: "example@http://localhost:3000/remoteEntry.js"
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          }
        }
      }),
      new HtmlWebpackPlugin({
          template: "./public/index.html"
      })
    ]
  };