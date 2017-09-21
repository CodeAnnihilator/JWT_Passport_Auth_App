import typeToReducer from 'type-to-reducer'

import { AUTHORIZE_SUCCESS } from 'src/components/auth/login/LoginActions'

const initialState = {
  authPending: false,
  isAuthenticated: false,
  username: '',
  email: ''
}

export default typeToReducer({
  [ AUTHORIZE_SUCCESS ]: (state, action) => ({
    ...state,
    isAuthenticated: action.payload.isAuthenticated,
    username: action.payload.username,
    email: action.payload.email,
    message: action.payload.message
  })
}, initialState)
