export const GET_CATEGORY_PRODUCTS = '@src/components/CategoryProducts/GET_CATEGORY_PRODUCTS'
export const GET_CATEGORY_PRODUCTS_SUCCESS = '@src/components/CategoryProducts/GET_CATEGORY_PRODUCTS_SUCCESS'

export const getCategoryProducts = catId => ({
  type: GET_CATEGORY_PRODUCTS,
  payload: { catId }
})

export const getCategoryProductsSuccess = products => ({
  type: GET_CATEGORY_PRODUCTS_SUCCESS,
  payload: { products }
})
