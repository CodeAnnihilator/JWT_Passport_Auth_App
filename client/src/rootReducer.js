import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import { routerReducer } from 'react-router-redux'

import loginReducer from '@src/components/auth/login/loginReducer.js'
import categoryProductsReducer from '@src/components/CategoryProducts/categoryProductsReducer.js'

export default enableBatching(combineReducers({
  routing: routerReducer,
  auth: loginReducer,
  category_products: categoryProductsReducer,
}))
