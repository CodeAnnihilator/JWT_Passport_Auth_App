import { connect } from 'react-redux'
import { registrate } from './RegistrationActions'

import RegistrationComponent from './RegistrationComponent'

const mapDispatchToProps = dispatch => ({
  registerUser: (username, email, password, password2) => dispatch(registrate(username, email, password, password2))
})

export default connect(null, mapDispatchToProps)(RegistrationComponent)
