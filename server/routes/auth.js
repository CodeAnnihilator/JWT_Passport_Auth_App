import express from 'express'
import bcrypt from 'bcrypt-nodejs'
import jwt from 'jsonwebtoken'
import config from '../config/main'
import delay from '../config/delay'
import uniqid from 'uniqid'

export const users = []

const hashPass = password => {
  const SALT_FACTOR = 5
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      bcrypt.hash(password, salt, null, (err, hash) => {
        resolve(hash)
      })
    })
  })
}

const comparePassword = (candidatePassword, userPassword, cb) => {
  bcrypt.compare(candidatePassword, userPassword, (err, isMatch) => {
    if (err) return cb(err)
    cb(null, isMatch)
  })
}

export default (() => {
  const authRouter = express.Router()

  authRouter.post('/register', async (req, res) => {
      const hashedPass = await hashPass(req.body.password)
      const user = Object.assign({}, req.body, { password: hashedPass })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          users.push(user)
          resolve(user)
        }, delay)
      }).then(user => res.status(200).send({ success: true, user }))
    })

  authRouter.post('/authenticate_token', (req, res) => {
    const token = req.body.token
    if (!token) return res.status(401).json({ message: 'Must pass token' })
    jwt.verify(token, config.secret, function(err, user) {
      if (err) throw err
      res.json({ user: user, token: token })
    })
  })

  authRouter.post('/authenticate', (req, res) => {
    const user = users.find(user => user.email === req.body.email)
    if (!user) {
      res.status(403).send({ success: false, message: 'Authentication failed. User not found' })
    } else {
      comparePassword(req.body.password, user.password, function(err, isMatch) {
        if (isMatch && !err) {
          const token = jwt.sign(user, config.secret, { expiresIn: 10080 })
          res.json({ success: true, token: token })
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match' })
        }
      })
    }
  })
  return authRouter
})()
