"use strict";

var path = require("path");

module.exports = [
  {
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            exclude: /node_modules/,
          },
        },
      ],
    },
    name: "path-loader",
    optimization: {
      minimize: false,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "path-loader.js",
      library: "PathLoader",
    },
  },
  {
    entry: "./src/index.ts",
    mode: "production",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "ts-loader",
            exclude: /node_modules/,
          },
        },
      ],
    },
    name: "path-loader-min",
    optimization: {
      minimize: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "path-loader-min.js",
      library: "PathLoader",
    },
  },
];
