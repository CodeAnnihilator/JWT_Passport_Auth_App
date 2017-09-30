import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'

const IS_PRODUCTION = false

const entry = IS_PRODUCTION
  ? [ path.join(__dirname, 'src/index.js') ]
  : [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    path.join(__dirname, 'src/index.js')
  ]

const plugins = IS_PRODUCTION
  ? [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style-[contenthash:10].css'),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'src/index-template.js')
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
      '@src': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images')
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

// import webpack from 'webpack'
// import path from 'path'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
//
// export default {
//   devtool: 'inline-source-map',
//   context: path.join(__dirname, 'src'), // The base directory, an absolute path, for resolving entry points and loaders from conf.
//   entry: [
//     'eventsource-polyfill', // Provide polyfill to support EventSource in browser where it is not available.
//     'webpack-hot-middleware/client?reload=true', // connect a browser client to a webpack server & receive updates
//     './index'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'), // The output directory as an absolute path.
//     // publicPath: '/',
//     filename: 'bundle.js' // This option determines the name of each output bundle.
//   },
//   resolve: {
//     alias: {
//       '@src': path.resolve(__dirname, 'src'),
//       '@images': path.resolve(__dirname, 'src/assets/images')
//     },
//     extensions: ['.js']
//   },
//   resolveLoader: {
//     moduleExtensions: ['-loader']
//   },
//   plugins: [
//     new webpack.optimize.ModuleConcatenationPlugin(),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     new ExtractTextPlugin({
//       filename: 'bundle.css',
//       allChunks: true
//     })
//   ],
//   module: {
//     loaders: [
//       { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file'] },
//       { test: /\.js$/, include: path.join(__dirname, 'src'), use: ['babel'] },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style',
//           publicPath: '/',
//           use: [
//             { loader: 'css?importLoaders=1&modules=true&localIdentName=[name]__[local]___[hash:base64:5]' },
//             { loader: 'resolve-url' }
//           ]
//         })
//       },
//       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
//       { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
//       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
//       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
//     ]
//   }
// }
