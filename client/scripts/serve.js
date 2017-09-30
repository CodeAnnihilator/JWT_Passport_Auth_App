import '../config/environment'

import http from 'http'
import koa from 'koa'
import open from 'open'
import serve from 'koa-static'
import { STATIC } from '../config/paths'

const app = new koa()

app.use(serve(STATIC))

const server = http.createServer(app.callback())

server.listen(process.env.PORT, 'localhost', function() {
  open(`${process.env.FETCHURL}:${process.env.PORT}`)
})
