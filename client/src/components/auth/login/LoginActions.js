export const LOGIN = '@src/components/auth/login/LOGIN'
export const LOGIN_PENDING = '@src/components/auth/login/LOGIN_PENDING'
export const LOGIN_SUCCESS = '@src/components/auth/login/LOGIN_SUCCESS'
export const AUTH_TOKEN_SUCCESS = '@src/components/auth/login/AUTH_TOKEN_SUCCESS'

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
})

export const loginPending = (isPending, inProgressMessage, descriptionMessage) => ({
  type: LOGIN_PENDING,
  payload: { isPending, inProgressMessage, descriptionMessage }
})

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: { user }
})

export const authTokenSuccess = token => ({
  type: AUTH_TOKEN_SUCCESS,
  payload: { token }
})
