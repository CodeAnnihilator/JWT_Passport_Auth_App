export const GET_CATEGORY_PRODUCTS = '@src/components/CategoryProducts/GET_CATEGORY_PRODUCTS'
export const GET_CATEGORY_PRODUCTS_SUCCESS = '@src/components/CategoryProducts/GET_CATEGORY_PRODUCTS_SUCCESS'
export const SET_PRICE = '@src/components/CategoryProducts/SET_PRICE'
export const SET_CURRENT_PRICE = '@src/components/CategoryProducts/SET_CURRENT_PRICE'
export const CHANGE_ORDER = '@src/components/CategoryProducts/CHANGE_ORDER'

export const changeOrder = value => ({
  type: CHANGE_ORDER,
  payload: { value }
})

export const setCurrentPrice = (price, field) => ({
  type: SET_CURRENT_PRICE,
  payload: { price, field }
})

export const setPrice = (price, field) => ({
  type: SET_PRICE,
  payload: { price, field }
})

export const getCategoryProducts = catId => ({
  type: GET_CATEGORY_PRODUCTS,
  payload: { catId }
})

export const getCategoryProductsSuccess = products => ({
  type: GET_CATEGORY_PRODUCTS_SUCCESS,
  payload: { products }
})
