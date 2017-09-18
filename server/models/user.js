import bcrypt from 'bcrypt-nodejs'
import delay from '../config/delay'

export const users = []

export default class UserApi {
  static saveNewUser(user) {
    user = Object.assign({}, user)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        users.push(user)
        resolve(user)
      }, delay)
    }).then(user => {
      res.json(user)
    })
  }
}
