const path = require("path");

module.exports = (env, argv) => {
  const mode = argv.mode || "development";

  const config = {
    context: __dirname,
    entry: "/frontend/index.jsx",
    output: {
      path: path.resolve(__dirname, "app", "assets", "javascripts"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            query: {
              presets: ["@babel/env", "@babel/react"],
            },
          },
        },
      ],
    },
    devtool: mode === "development" ? "cheap-module-eval-source-map" : false,
    resolve: {
      extensions: [".js", ".jsx", "*"],
    },
  };
  return config;
};
