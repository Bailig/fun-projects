module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: true,
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["react-hot-loader/babel"],
};
