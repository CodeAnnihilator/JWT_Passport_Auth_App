import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const IS_PRODUCTION = false

const entry = IS_PRODUCTION
  ? [ path.join(__dirname, '../src/index.js') ]
  : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.join(__dirname, '../src/index.js')
  ]

const plugins = IS_PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../src/index-template.js')
    })
  ]
  : [ new webpack.HotModuleReplacementPlugin() ]

// plugins.push(
//   new webpack.DefinePlugin({
//     'process.env': {
//         'NODE_ENV': IS_PRODUCTION ? 'production' : ''
//     }
//   })
// )

const cssIdentifier = IS_PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]'

const cssLoader = IS_PRODUCTION
  ? ExtractTextPlugin.extract({ loader: 'css-loader?minimize&localIdentName=' + cssIdentifier })
  : [ 'style-loader', 'css-loader?localIdentName=' + cssIdentifier ]

export default {
  devtool: 'inline-source-map',
  entry: entry,
  plugins: plugins,
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
			loaders: cssLoader,
			exclude: /node_modules/
		}]
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
		publicPath: IS_PRODUCTION ? '/' : '/dist/',
		filename: IS_PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
	}
}
