import axios from 'axios'

const APP_URL = 'http://localhost:9000'

export const fetch = axios.create({
  baseURL: `${APP_URL}/api`
})

// fetch.interceptors.request.use(config => {
//   return config
// })
