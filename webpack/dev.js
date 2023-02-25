const { resolve } = require('node:path');
const commonConfig = require('./common');
const { merge } = require('webpack-merge');
const serverOptions = require('./server');

const devConfig = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: serverOptions,
  output: {
    path: resolve(__dirname, '../public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        oneOf: [
          {
            dependency: { not: ['url'] },
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  titleProp: true,
                  svgo: true,
                },
              },
              'new-url-loader',
            ],
          },
          {
            type: 'asset/resource',
            generator: {
              filename: 'static/[name].[contenthash][ext][query]',
            },
            parser: {
              dataUrlCondition: 4 * 1024,
            },
          },
        ],
      },
    ],
  },
});

module.exports = devConfig;
