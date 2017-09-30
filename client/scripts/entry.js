import { argv } from 'yargs'

const file = (() => {
  switch (true) {
    case argv.dev:
      return 'dev.js'
    case argv.build:
      return 'build.js'
    case argv.serve:
      return 'serve.js'
  }
})()

require(`./${file}`)
