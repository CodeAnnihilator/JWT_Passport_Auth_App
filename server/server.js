import express from 'express'
const app = express()

import bodyParser from 'body-parser'
import morgan from 'morgan'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import './config/passport'
import authRoutes from './routes/auth'
import categoriesRoutes from './routes/categories'
import productsRoutes from './routes/products'

const port = 9000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

app.use(passport.initialize())

let isAuthenticated = passport.authenticate('jwt', { session: false })
app.use('/api', authRoutes)
app.use('/api', categoriesRoutes)
app.use('/api', productsRoutes)

app.listen(port)
console.log(`Server is running on port ${port}`)
