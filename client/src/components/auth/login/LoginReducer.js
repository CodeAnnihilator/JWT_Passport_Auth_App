import typeToReducer from 'type-to-reducer'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS
} from 'src/components/auth/login/LoginActions'

const initialState = {
  authPending: false,
  inProgressMessage: '',
  descriptionMessage: '',
  isAuthenticated: false,
  username: '',
  email: ''
}

export default typeToReducer({
  [ LOGIN_PENDING ]: (state, { isPending, inProgressMessage, descriptionMessage }) => ({
    ...state,
    authPending: isPending,
    inProgressMessage,
    descriptionMessage
  }),
  [ LOGIN_SUCCESS ]: (state, { user: { username, email } }) => ({
    ...state,
    isAuthenticated: true,
    username,
    email
  })
}, initialState)
