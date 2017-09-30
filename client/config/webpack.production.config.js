import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: [ path.join(__dirname, '../src/index.js') ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../src/index-template.html')
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify('production'),
          BABEL_ENV: JSON.stringify('production')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@images': path.resolve(__dirname, '../src/assets/images')
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
			loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: ['css-loader?minimize&localIdentName=[hash:base64:10]']
      }),
			exclude: /node_modules/
		}]
	},
  output: {
    path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'bundle.[hash:12].min.js'
	},
  stats: 'normal'
}
