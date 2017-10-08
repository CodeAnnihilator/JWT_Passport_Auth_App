import { authFetch } from '@src/utils/fetch'

export const requestCategoryProducts = catId => authFetch.get(`products?id=${catId}`)
