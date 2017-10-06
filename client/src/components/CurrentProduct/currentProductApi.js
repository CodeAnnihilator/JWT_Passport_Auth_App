import { fetch } from '@src/utils/fetch'

export const requestCurrentProductApi = id => fetch.get(`product?id=${id}`)
