import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import { routerReducer } from 'react-router-redux'

import loginReducer from '@src/components/auth/login/loginReducer.js'
import categoryProductsReducer from '@src/components/CategoryProducts/categoryProductsReducer.js'
import currentProductSaga from '@src/components/CurrentProduct/currentProductReducer.js'

export default enableBatching(combineReducers({
  routing: routerReducer,
  auth: loginReducer,
  category_products: categoryProductsReducer,
  current_product: currentProductSaga,
}))
