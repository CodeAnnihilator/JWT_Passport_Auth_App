import '../config/environment'

import webpack from 'webpack'
import config from '../config/webpack.production.config.js'

const compiler = webpack(config)

compiler.run((err, stats) => {
  if (err) {
    return console.error(err)
  }
  console.log(stats)
});
