import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { enableBatching } from 'redux-batched-actions'

import LoginReducer from 'src/components/auth/login/LoginReducer.js'

export default enableBatching(combineReducers({
  routing: routerReducer,
  auth: LoginReducer
}))
