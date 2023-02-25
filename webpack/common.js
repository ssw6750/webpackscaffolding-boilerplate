const { resolve } = require('node:path');

const commonConfig = {
  target: ['web', 'browserslist'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.wasm'],
    alias: {
      '@': resolve('src'),
    },
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
        test: /\.(css|s[ac]ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /\.module\.(css|s[ac]ss)$/i,
      },
      {
        test: /\.module\.(css|s[ac]ss)$/i,
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
          'sass-loader',
        ],
        include: /\.module\.(css|s[ac]ss)$/i,
      },
      {
        test: /\.(jpe?g|png|gif|webp|bmp)$/i,
        type: 'asset/resource',
        // 로더 별, 개별 설정
        generator: {
          filename: 'static/[name].[contenthash][ext][query]',
        },
        parser: {
          dataUrlCondition: 8 * 1024, // 8kb
        },
      },
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
};

// export default
module.exports = commonConfig;
