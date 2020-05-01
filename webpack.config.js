const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.js',
    saved_articles: './src/saved_articles/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: 'babel-loader' },
      exclude: /node_modules/, // исключает папку node_modules
    },
    {
      test: /\.css$/,
      use: [
         {
           loader: MiniCssExtractPlugin.loader,
           options: {
             publicPath: '../'
            }
          },
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      use: [
        'file-loader?name=./images/[name].[ext]',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            disable: true,
          },
        },
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/i,
      loader: 'file-loader?name=./fonts/[name].[ext]',
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: false, // стили НЕ нужно прописывать внутри тегов
      template: './src/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: './index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
      favicon: './src/images/favicon.svg'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/saved_articles/index.html',
      filename: './saved_articles/index.html',
    }),
    new WebpackMd5Hash(),
  ],
};
