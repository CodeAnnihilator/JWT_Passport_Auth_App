import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import webpackBaseConfig from './webpack.base.config'
import { SRC } from './paths'

export default {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    `webpack-dev-server/client?${process.env.FETCHURL}:${process.env.PORT}`,
    `${SRC}/index.js`
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
    ...webpackBaseConfig.plugins
  ],
  resolve: webpackBaseConfig.resolve,
  module: {
		rules: [{
			test: /\.s?css$/,
      exclude: /module\.s?css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: false, localIdentName: '[path][name]---[local]' } },
        { loader: 'sass-loader' }
      ]
		},{
			test: /module\.s?css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: true, localIdentName: '[path][name]---[local]' } },
        { loader: 'sass-loader' }
      ]
		}, ...webpackBaseConfig.module.rules]
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	}
}
