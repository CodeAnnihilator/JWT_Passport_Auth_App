import typeToReducer from 'type-to-reducer'

import {
  GET_CURRENT_PRODUCT_SUCCESS,
} from './currentProductActions'

const initialState = {
  product: null
}

export default typeToReducer({
  [ GET_CURRENT_PRODUCT_SUCCESS ]: (state, { payload }) => ({
    ...state,
    product: payload.product
  })
}, initialState)
