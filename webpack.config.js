/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/* eslint-enable import/no-extraneous-dependencies */

const resolvePackage = (relativePath) =>
  path.resolve(process.cwd(), relativePath);

const resolveRoot = (relativePath) =>
  path.resolve(__dirname, `./${relativePath}`);

const paths = {
  root: {
    path: resolveRoot("."),
    tsConfig: resolveRoot("tsconfig.json"),
    env: resolveRoot(".env"),
  },
  package: {
    path: resolvePackage("."),
    indexTsx: resolvePackage("src/index.tsx"),
    dist: resolvePackage("dist"),
    public: resolvePackage("public"),
    indexHtml: resolvePackage("public/index.html"),
  },
};

require("dotenv").config({ path: paths.root.env });

const isDev = process.env.NODE_ENV === "development";

const config = {
  entry: [isDev && "react-hot-loader/patch", paths.package.indexTsx].filter(
    Boolean,
  ),
  output: {
    path: paths.package.dist,
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: "file-loader",
      },
      {
        test: /\.(mp3|mp4)$/,
        loader: "url-loader",
        options: {
          publicPath: "assets",
          outputPath: "assets",
          limit: 1000,
          name: "[name].[hash].[ext]",
        },
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: { configFile: paths.root.tsConfig },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        TEXT_TO_SPEECH_API_KEY: `"${process.env.TEXT_TO_SPEECH_API_KEY}"`,
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.package.indexHtml,
      appMountId: "app",
      title: "Fun projects",
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[/\\]node_modules[/\\]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    contentBase: paths.package.dist,
  },
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = "[name].[hash].js";
  }

  return config;
};
