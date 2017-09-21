export const AUTHORIZE = 'src/components/auth/login/AUTHORIZE'
export const AUTHORIZE_SUCCESS = 'src/components/auth/login/AUTHORIZE_SUCCESS'
export const LOGIN_SUCCESS = 'src/components/auth/login/LOGIN_SUCCESS'
export const LOGIN = 'src/components/auth/login/LOGIN'
export const LOGIN_PENDING = 'src/components/auth/login/LOGIN_PENDING'

export const authorize = (email, password) => ({
  type: AUTHORIZE,
  payload: { email, password }
})

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
})

export const loginPending = (isPending, inProgressMessage, descriptionMessage) => ({
  type: LOGIN_PENDING, isPending, inProgressMessage, descriptionMessage
})

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS, user
})

export const authorizeSuccess = (username, email) => ({
  type: AUTHORIZE_SUCCESS,
  payload: { username, email, isAuthenticated: true, message: `You have successfully logged in as ${username}!` }
})
