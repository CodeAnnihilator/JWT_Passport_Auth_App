export const GET_CURRENT_PRODUCT = '@src/components/CurrentProduct/GET_CURRENT_PRODUCT'
export const GET_CURRENT_PRODUCT_SUCCESS = '@src/components/CurrentProduct/GET_CURRENT_PRODUCT_SUCCESS'

export const getCurrentProduct = id => ({
  type: GET_CURRENT_PRODUCT,
  payload: { id }
})

export const getCurrentProductSuccess = product => ({
  type: GET_CURRENT_PRODUCT_SUCCESS,
  payload: { product }
})
