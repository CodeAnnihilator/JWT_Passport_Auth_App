export const AUTHORIZE = 'src/components/auth/login/AUTHORIZE'
export const AUTHORIZE_SUCCESS = 'src/components/auth/login/AUTHORIZE_SUCCESS'
export const LOGIN_SUCCESS = 'src/components/auth/login/LOGIN_SUCCESS'
export const LOGIN = 'src/components/auth/login/LOGIN'

export const authorize = (email, password) => ({
  type: AUTHORIZE,
  payload: { email, password }
})

export const login = (email, password) => ({
  type: LOGIN,
  payload: { email, password }
})

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: { user }
})

export const authorizeSuccess = (username, email) => ({
  type: AUTHORIZE_SUCCESS,
  payload: { username, email, isAuthenticated: true, message: `You have successfully logged in as ${username}!` }
})
