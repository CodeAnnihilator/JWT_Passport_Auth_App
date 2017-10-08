import axios from 'axios'

import Cookies from 'universal-cookie'
const cookies = new Cookies()
const token = cookies.get('token')

const API_URL = 'http://localhost:9000'

export const fetch = axios.create({
  baseURL: `${API_URL}/api`
})

export const authFetch = axios.create({
  baseURL: `${API_URL}/api`
})

// authFetch.defaults.headers.common['Authorization'] = 'JWT ' + cookies.get('token')

authFetch.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      'Authorization': 'JWT ' + cookies.get('token')
    }
  }
}, error => Promise.reject(error))
