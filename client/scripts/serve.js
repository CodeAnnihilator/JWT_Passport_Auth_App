import '../config/environment'

import open from 'open'
import { STATIC } from '../config/paths'

import path from 'path'
import express from 'express'
const app = express()
app.use(express.static(STATIC))

app.get('*', function (req, res){
  res.sendFile(path.join(STATIC, 'index.html'))
})

app.listen(process.env.PORT, function() {
  open(`${process.env.FETCHURL}:${process.env.PORT}`)
})
