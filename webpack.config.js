/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

/* eslint-enable import/no-extraneous-dependencies */

const resolvePackage = (relativePath) =>
  path.resolve(process.cwd(), relativePath);

const resolveRoot = (relativePath) =>
  path.resolve(__dirname, `./${relativePath}`);

const getPaths = () => {
  return {
    root: {
      path: resolveRoot("."),
      tsConfig: resolveRoot("tsconfig.json"),
      nodeModules: resolveRoot("node_modules"),
    },
    package: {
      indexTsx: resolvePackage("src/index.tsx"),
      dist: resolvePackage("dist"),
      path: resolvePackage("."),
      public: resolvePackage("public"),
      indexHtml: resolvePackage("public/index.html"),
      packageJson: resolvePackage("package.json"),
      src: resolvePackage("src"),
      tsConfig: resolvePackage("tsconfig.json"),
      env: resolvePackage("src/config/env"),
    },
  };
};

const paths = getPaths();

const config = {
  entry: ["react-hot-loader/patch", paths.package.indexTsx],
  output: {
    path: paths.package.dist,
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
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
    new HtmlWebpackPlugin({
      appMountId: "app",
      filename: "index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: paths.package.indexHtml }],
    }),
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
