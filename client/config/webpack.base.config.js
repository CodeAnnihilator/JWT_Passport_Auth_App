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
		}]
	}
}
