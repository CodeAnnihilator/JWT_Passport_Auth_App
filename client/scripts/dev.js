import '../config/environment'

import path from 'path'
import open from 'open'
import webpack from 'webpack'
import { SRC } from '../config/paths'

import WebpackDevServer from 'webpack-dev-server'
import config from '../config/webpack.development.config.js'

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	contentBase: SRC,
	historyApiFallback: true,
	stats: {
		colors: true
	}
})

server.listen(process.env.PORT, 'localhost', function() {
  open(`${process.env.FETCHURL}:${process.env.PORT}`)
})
