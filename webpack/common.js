const { resolve } = require('node:path');

const commonConfig = {
  target: ['web', 'browserslist'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
  },
  entry: {
    main: resolve(__dirname, '../src/index.jsx'),
  },
  module: {
    rules: [
      {
        // 어떤 파일을 변환할 것인가?
        test: /\.jsx?$/i,
        // 어떤 파일은 제외할 것인가?
        exclude: /node_modules/,
        // 어떤 로더를 사용해 파일을 변환할 것인가?
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/i,
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
              modules: {
                localIdentName: '[folder]_[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/i,
      },
    ],
  },
};

// export default
module.exports = commonConfig;
