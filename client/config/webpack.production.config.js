import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

import webpackBaseConfig from './webpack.base.config'
import { SRC } from './paths'

export default {
  entry: [ `${SRC}/index.js` ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({ template: `${SRC}/index-template.html` }),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
    ...webpackBaseConfig.plugins
  ],
  resolve: webpackBaseConfig.resolve,
  module: {
		rules: [{
			test: /\.s?css$/,
      exclude: /module\.s?css$/,
			use: ExtractTextPlugin.extract({
        use: [
          { loader: 'css-loader', options: { modules: false, minimize: true, localIdentName: '[hash:base64:10]' } },
          { loader: 'sass-loader' }
        ], fallback: 'style-loader'
      })
		}, {
			test: /module\.s?css$/,
			use: ExtractTextPlugin.extract({
        use: [
          { loader: 'css-loader', options: { modules: true, minimize: true, localIdentName: '[hash:base64:10]' } },
          { loader: 'sass-loader' }
        ], fallback: 'style-loader'
      })
		}, ...webpackBaseConfig.module.rules]
	},
  output: {
    path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'bundle.[hash:12].min.js'
	},
  stats: 'normal'
}
