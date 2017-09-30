import loadEnv from 'node-env-file'
import { ROOT } from './paths'

loadEnv(`${ROOT}/.env`, {
  raise: false,
})

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 3000
process.env.FETCHURL = process.env.FETCHURL || 'http://localhost'
