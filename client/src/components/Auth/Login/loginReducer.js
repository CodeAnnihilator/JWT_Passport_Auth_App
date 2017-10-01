import typeToReducer from 'type-to-reducer'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  AUTH_TOKEN_SUCCESS,
  AUTH_TOKEN_ERROR,
  LOGIN_ERROR,
  LOGOUT_SUCCESS
} from '@src/components/Auth/Login/loginActions'

import {
  REGISTRATE_PENDING
} from '@src/components/Auth/Registration/registrationActions'

const initialState = {
  authPending: true,
  isAuthenticated: false,
  inProgressMessage: '',
  descriptionMessage: '',
  username: ''
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
    authPending: false,
    username: payload.username
  }),
  [ LOGIN_ERROR ]: state => ({
    ...state,
    isAuthenticated: false,
    authPending: false
  }),
  [ REGISTRATE_PENDING ]: (state, { payload }) => ({
    ...state,
    authPending: payload.isPending,
    inProgressMessage: payload.inProgressMessage,
    descriptionMessage: payload.descriptionMessage
  }),
  [ AUTH_TOKEN_ERROR ]: state => ({
    ...state,
    authPending: false,
  }),
  [ LOGOUT_SUCCESS ]: () => ({
    initialState
  })
}, initialState)
