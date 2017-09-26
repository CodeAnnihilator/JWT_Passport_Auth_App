import typeToReducer from 'type-to-reducer'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  AUTH_TOKEN_SUCCESS
} from 'src/components/auth/login/LoginActions'

import {
  REGISTRATE_PENDING
} from 'src/components/auth/registration/RegistrationActions'

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
  [ REGISTRATE_PENDING ]: (state, { isPending, inProgressMessage, descriptionMessage }) => ({
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
  }),
  [ AUTH_TOKEN_SUCCESS ]: state => ({
    ...state,
    isAuthenticated: true
  })
}, initialState)
