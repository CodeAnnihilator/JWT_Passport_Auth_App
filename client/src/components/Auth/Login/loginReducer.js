import typeToReducer from 'type-to-reducer'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  AUTH_TOKEN_SUCCESS,
  LOGIN_ERROR
} from '@src/components/Auth/Login/loginActions'

import {
  REGISTRATE_PENDING
} from '@src/components/Auth/Registration/registrationActions'

const initialState = {
  authPending: false,
  authTokenPending: true,
  inProgressMessage: '',
  descriptionMessage: '',
  isAuthenticated: false,
  username: '',
  email: ''
}

export default typeToReducer({
  [ LOGIN_PENDING ]: (state, { payload }) => ({
    ...state,
    authPending: payload.isPending,
    inProgressMessage: payload.inProgressMessage,
    descriptionMessage: payload.descriptionMessage
  }),
  [ LOGIN_SUCCESS ]: (state, { payload }) => ({
    ...state,
    isAuthenticated: true,
    authTokenPending: false,
    username: payload.username
  }),
  [ LOGIN_ERROR ]: state => ({
    ...state,
    isAuthenticated: false,
    authTokenPending: false
  }),
  [ REGISTRATE_PENDING ]: (state, { payload }) => ({
    ...state,
    authPending: payload.isPending,
    inProgressMessage: payload.inProgressMessage,
    descriptionMessage: payload.descriptionMessage
  })
}, initialState)
