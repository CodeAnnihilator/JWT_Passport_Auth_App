import express from 'express'
const app = express()

import bodyParser from 'body-parser'
import morgan from 'morgan'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import config from './config/main'
import './config/passport'

import UserApi from './models/user'

import authRoutes from './routes/auth'

const port = 9000


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

app.use(passport.initialize())

const apiRoutes = express.Router()
apiRoutes.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.user)
  res.send(`You have successfully been authorized as ${req.user.username}`)
})

app.use('/api', apiRoutes)
app.use('/api', authRoutes)

app.get('/', (req, res) => {
  res.send('test home page')
})

app.listen(port)
console.log(`Server is running on port ${port}`)
