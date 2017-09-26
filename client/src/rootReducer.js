import { combineReducers } from 'redux'
import { enableBatching } from 'redux-batched-actions'
import { routerReducer } from 'react-router-redux'

import LoginReducer from 'src/components/auth/login/LoginReducer.js'

export default enableBatching(combineReducers({
  routing: routerReducer,
  auth: LoginReducer
}))
