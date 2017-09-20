import { fetch } from 'src/utils/fetch'

export const authorizeUser = (email, password) =>
  fetch.post('authenticate', { email, password })
