const { merge } = require('webpack-merge');
const { resolve } = require('node:path');
const commonConfig = require('./common');
const createCopyPlugin = require('./plugins/createCopyPlugin');

const buildConfig = merge(commonConfig, {
  mode: 'production',
  devtool: false,
  plugins: [...commonConfig.plugins, createCopyPlugin()].filter(Boolean),
  output: {
    path: resolve(__dirname, '../build'),
    filename: '[name].min.js',
  },
});

module.exports = buildConfig;
