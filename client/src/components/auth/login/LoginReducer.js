import typeToReducer from 'type-to-reducer'

import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  AUTH_TOKEN_SUCCESS
} from '@src/components/Auth/Login/loginActions'

// import {
//   REGISTRATE_PENDING
// } from 'src/components/Auth/Registration/RegistrationActions'

const initialState = {
  authPending: false,
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
  // [ REGISTRATE_PENDING ]: (state, { isPending, inProgressMessage, descriptionMessage }) => ({
  //   ...state,
  //   authPending: isPending,
  //   inProgressMessage,
  //   descriptionMessage
  // }),
  [ LOGIN_SUCCESS ]: (state, { payload }) => ({
    ...state,
    isAuthenticated: true,
    username: payload.user.username,
    email: payload.user.email
  }),
  [ AUTH_TOKEN_SUCCESS ]: state => ({ ...state, isAuthenticated: true })
}, initialState)
