const createDotEnvPlugin = require('../plugins/createDotEnvPlugin');
const { cssExtractLoader } = require('../plugins/createCssExtractPlugin');
const { env } = require('node:process');

console.log(env.NODE_ENV);
// console.log(createDotEnvPlugin);

// console.log(env.NODE_ENV.includes('development'));
// let isDev = env.NODE_ENV.includes('development');
let isDev = true



const styleLoader = {
  test: /\.s?[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : cssExtractLoader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 2,
      },
    },
    'postcss-loader',
    'sass-loader',
  ],
  exclude: /\.module\.s?[ac]css$/i,
};

module.exports = styleLoader;
