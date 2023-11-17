/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bdp = require('bundle-declarations-webpack-plugin');

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.webpack.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  plugins: [
    new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new bdp.BundleDeclarationsWebpackPlugin({
      entry: ['./src/index.ts'],
      outFile: 'index.d.ts',
    }),
  ],
  externals: [nodeExternals()],
  stats: {
    assets: true,
  },
};

module.exports = [config];
