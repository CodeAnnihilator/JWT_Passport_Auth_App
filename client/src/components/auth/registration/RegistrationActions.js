export const REGISTRATE = 'src/components/auth/registration/REGISTRATE'

export const registrate = (username, email, password, password2) => ({
  type: REGISTRATE,
  payload: { username, email, password, password2 }
})
