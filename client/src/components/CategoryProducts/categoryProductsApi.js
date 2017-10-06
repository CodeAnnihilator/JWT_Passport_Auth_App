import { fetch } from '@src/utils/fetch'

export const requestCategoryProducts = catId => fetch.get(`products?id=${catId}`)
