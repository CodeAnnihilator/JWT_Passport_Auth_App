import webpack from 'webpack'
import { SRC, NODE_MODULES } from './paths'

export default {
  resolve: {
    alias: {
      '@src': SRC,
      '@images': `${SRC}/assets/images`,
      '@rc-slider': `${NODE_MODULES}/rc-slider/assets`
    },
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [{
			test: /\.js$/,
			use: [{
        loader: 'babel-loader'
      }],
			exclude: /node_modules/
		}, {
			test: /\.(png|jpg|gif)$/,
			use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[hash:12].[ext]'
        }
      }],
			exclude: /node_modules/
		}, {
      test: /\.[ot]tf$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream',
          name: 'assets/fonts/[name].[ext]'
        }
      }]
    }]
	}
}
//
// { test: /\.svg$/, loader: 'url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
// { test: /\.woff$/, loader: 'url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
// { test: /\.woff2$/, loader: 'url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
// { test: /\.[ot]tf$/, loader: 'url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
// { test: /\.eot$/, loader: 'url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }
