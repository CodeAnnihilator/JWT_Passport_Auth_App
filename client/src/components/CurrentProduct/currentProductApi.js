import { authFetch } from '@src/utils/fetch'

export const requestCurrentProductApi = id => authFetch.get(`product?id=${id}`)
