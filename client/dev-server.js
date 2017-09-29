import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'
import config from './webpack.config.dev.js'
import path from 'path'

const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	contentBase: path.resolve(__dirname, 'src'),
	historyApiFallback: true,
	stats: {
		colors: true
	}
})

server.listen(8080, 'localhost', function() {})
