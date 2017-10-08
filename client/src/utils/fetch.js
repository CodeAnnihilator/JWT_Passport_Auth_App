import axios from 'axios'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const API_URL = 'http://localhost:9000'

export const fetch = axios.create({
  baseURL: `${API_URL}/api`
})

export const authFetch = { ...fetch }
authFetch.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      'Authorization': 'JWT ' + cookies.get('token')
    }
  }
}, error => Promise.reject(error))
