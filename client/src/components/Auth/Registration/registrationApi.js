import { fetch } from '@src/utils/fetch'

export const registrateUser = (username, email, password) =>
  fetch.post('register', { username, email, password })
