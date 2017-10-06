import typeToReducer from 'type-to-reducer'

import {
  GET_CATEGORY_PRODUCTS_SUCCESS,
} from '@src/components/CategoryProducts/categoryProductsActions'

const initialState = {
  products: [],

}

export default typeToReducer({
  [ GET_CATEGORY_PRODUCTS_SUCCESS ]: (state, { payload }) => ({
    ...state,
    products: payload.products
  })
}, initialState)
