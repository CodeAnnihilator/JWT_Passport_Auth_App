export const LOGIN = '@src/components/Auth/Login/LOGIN'
export const LOGIN_PENDING = '@src/components/Auth/Login/LOGIN_PENDING'
export const LOGIN_SUCCESS = '@src/components/Auth/Login/LOGIN_SUCCESS'
export const LOGIN_ERROR = '@src/components/Auth/Login/LOGIN_ERROR'
export const AUTH_TOKEN_SUCCESS = '@src/components/Auth/Login/AUTH_TOKEN_SUCCESS'
export const AUTH_TOKEN_ERROR = '@src/components/Auth/Login/AUTH_TOKEN_ERROR'
export const LOGOUT = '@src/components/Auth/Login/LOGOUT'
export const LOGOUT_SUCCESS = '@src/components/Auth/Login/LOGOUT_SUCCESS'

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
})

export const loginPending = (isPending, inProgressMessage, descriptionMessage) => ({
  type: LOGIN_PENDING,
  payload: { isPending, inProgressMessage, descriptionMessage }
})

export const loginSuccess = username => ({
  type: LOGIN_SUCCESS,
  payload: { username }
})

export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: { error }
})

export const authTokenSuccess = token => ({
  type: AUTH_TOKEN_SUCCESS,
  payload: { token }
})

export const authTokenError = () => ({
  type: AUTH_TOKEN_ERROR
})

export const logout = () => ({
  type: LOGOUT
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})
