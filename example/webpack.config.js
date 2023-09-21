'use strict';
/*eslint-env node*/
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const buildFolder = path.resolve(__dirname, 'build');

const env = {
  development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined',
  production: NODE_ENV === 'production',
};

const config = {
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: [
    '@babel/polyfill',
    './src/js/index.jsx'
  ],
  output: {
    path: buildFolder,
    filename: `[name].[contenthash].js`,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {loader: 'babel-loader'},
        ],
        exclude: /node_modules\/(?!qs)/
      },
      {
        test: /\.scss$/,
        use: [
          env.development ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          env.development ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset',
      }
    ]
  },
  resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
  },
  optimization: {
    runtimeChunk: true,
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'www/indexTemplate.html',
      title: 'React Dropdown Menu Example',
      showErrors: true,
      xhtml: true,
      inject: 'body', // true | 'head' | 'body' | false
      minify: {}
    }),
    new MiniCssExtractPlugin({
      filename: env.development ? '[name].css' : '[name].[contenthash].css'
    })
  ]
};

if(env.development) {
  const host = 'localhost';
  const port = 8080;
  const DEV_URL = `http://${host}:${port}`;
  config.mode = 'development';
  config.devServer = {
    static: {
      directory: buildFolder
    },
    compress: true,
      port: port,
      open: DEV_URL
  }
}

module.exports=config;

