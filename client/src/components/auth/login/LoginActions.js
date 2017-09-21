export const LOGIN_SUCCESS = 'src/components/auth/login/LOGIN_SUCCESS'
export const LOGIN = 'src/components/auth/login/LOGIN'
export const LOGIN_PENDING = 'src/components/auth/login/LOGIN_PENDING'

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
