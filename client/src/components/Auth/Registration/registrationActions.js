export const REGISTRATE = '@src/components/Auth/Registration/REGISTRATE'
export const REGISTRATE_PENDING = '@src/components/Auth/Registration/REGISTRATE_PENDING'

export const registrate = (username, email, password) => ({
  type: REGISTRATE,
  payload: { username, email, password }
})

export const registratePending = (isPending, inProgressMessage, descriptionMessage) => ({
  type: REGISTRATE_PENDING,
  payload: { isPending, inProgressMessage, descriptionMessage }
})
