export const REGISTRATE = 'src/components/auth/registration/REGISTRATE'
export const REGISTRATE_PENDING = 'src/components/auth/registration/REGISTRATE_PENDING'

export const registrate = (username, email, password) => ({
  type: REGISTRATE, username, email, password
})

export const registratePending = (isPending, inProgressMessage, descriptionMessage) => ({
  type: REGISTRATE_PENDING, isPending, inProgressMessage, descriptionMessage
})
