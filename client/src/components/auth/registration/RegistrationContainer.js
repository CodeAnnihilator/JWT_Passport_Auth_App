import { connect } from 'react-redux'
import { registrate } from './registrationActions'

import RegistrationComponent from './RegistrationComponent'

const mapDispatchToProps = dispatch => ({
  registerUser: (username, email, password) => dispatch(registrate(username, email, password))
})

export default connect(null, mapDispatchToProps)(RegistrationComponent)
