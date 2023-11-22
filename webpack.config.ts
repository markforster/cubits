import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import { BannerPlugin } from 'webpack';
import BundleDeclarationsWebpackPlugin from 'bundle-declarations-webpack-plugin';

export default {
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
    new BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    new BundleDeclarationsWebpackPlugin({
      entry: ['./src/index.ts'],
      outFile: 'index.d.ts',
    }),
  ],
  externals: [nodeExternals()],
  stats: {
    assets: true,
  },
};
