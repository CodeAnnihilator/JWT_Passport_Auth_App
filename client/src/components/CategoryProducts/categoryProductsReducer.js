import typeToReducer from 'type-to-reducer'

import {
  GET_CATEGORY_PRODUCTS_SUCCESS,
  SET_CURRENT_PRICE,
  SET_PRICE,
  CHANGE_ORDER
} from '@src/components/CategoryProducts/categoryProductsActions'

const initialState = {
  products: [],
  minPrice: 0,
  maxPrice: 0,
  currentMinPrice: 0,
  currentMaxPrice: 0,
  order: 'asc'
}

export default typeToReducer({
  [ GET_CATEGORY_PRODUCTS_SUCCESS ]: (state, { payload }) => ({
    ...state,
    products: payload.products,
    order: 'asc'
  }),
  [ CHANGE_ORDER ]: (state, { payload }) => ({
    ...state,
    order: payload.value
  }),
  [ SET_PRICE ]: (state, { payload }) => ({
    ...state,
    [payload.field]: payload.price
  }),
  [ SET_CURRENT_PRICE ]: (state, { payload }) => ({
    ...state,
    [payload.field]: payload.price
  })
}, initialState)
