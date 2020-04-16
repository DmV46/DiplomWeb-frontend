const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    'main': './src/pages/index/index.js',
    'saved_articles': './src/pages/saved-articles/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/, // регулярное выражение, которое ищет все js файлы
      use: { loader: 'babel-loader' }, // весь JS обрабатывается пакетом babel-loader
      exclude: /node_modules/, // исключает папку node_modules
    },
    {
      test: /\.css$/, // применять это правило только к CSS-файлам
      use: [
        isDev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: '../' } },
        'css-loader',
        'postcss-loader',
      ], // к этим файлам нужно применить пакеты, которые мы уже установили
    },
    {
      test: /\.(png|jpg|gif|ico|svg)$/,
      use: [
        isDev ? 'file-loader?name=./images/[name].[ext]' : 'file-loader?name=images/[name].[ext]',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/fonts/[name].[ext]&publicPath=../',
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
      // chunks: ['index'],
      template: './src/pages/index/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: './index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new HtmlWebpackPlugin({
      inject: false, // стили НЕ нужно прописывать внутри тегов
      // chunks: ['saved-articles'],
      template: './src/pages/saved-articles/index.html', // откуда брать образец для сравнения с текущим видом проекта
      filename: './saved_articles/index.html', // имя выходного файла, то есть того, что окажется в папке dist после сборки
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
