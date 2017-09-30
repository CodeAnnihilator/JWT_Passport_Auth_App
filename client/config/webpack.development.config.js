import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

export default {
  devtool: 'inline-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.join(__dirname, '../src/index.js')
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('development')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
      '@rc-slider': path.resolve(__dirname, '../../node_modules/rc-slider/assets/')
    },
    extensions: ['.js']
  },
  module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
		}, {
			test: /\.(png|jpg|gif)$/,
			loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]']
		}, {
			test: /\.s?css$/,
      exclude: /module\.s?css$/,
			loaders: [ 'style-loader', 'css-loader?modules=false&localIdentName=[path][name]---[local]!sass-loader' ],
		},{
			test: /module\.s?css$/,
			loaders: [ 'style-loader', 'css-loader?modules=true&localIdentName=[path][name]---[local]!sass-loader' ]
		}]
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	}
}
