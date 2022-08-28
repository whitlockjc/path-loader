const path = require('path');


module.exports = [{
  name: "path-loader",
  mode: "development",
  devtool: "inline-source-map",
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'path-loader.js',
    library: 'PathLoader',
  },
},
{
  name: "path-loader-min",
  entry: "./src/index.ts",
  mode: "production",
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "path-loader-min.js",
    library: "PathLoader",
  },
}];
