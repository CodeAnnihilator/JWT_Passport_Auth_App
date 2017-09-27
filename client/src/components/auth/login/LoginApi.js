import { fetch } from '@src/utils/fetch'

export const authorizeUser = (email, password) =>
  fetch.post('authenticate', { email, password })

export const authenticateToken = token =>
  fetch.post('authenticate_token', { token })
