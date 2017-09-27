import { connect } from 'react-redux'

import AuthLayout from './AuthLayout'

const mapStateToProps = state => ({
  authPending: state.auth.authPending,
  inProgressMessage: state.auth.inProgressMessage,
  descriptionMessage: state.auth.descriptionMessage,
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username,
  email: state.auth.email
})

export default connect(mapStateToProps)(AuthLayout)
