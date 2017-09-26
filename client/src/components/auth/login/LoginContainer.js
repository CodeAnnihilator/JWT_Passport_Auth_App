import { connect } from 'react-redux'
import { login } from './loginActions'

import LoginComponent from './LoginComponent'

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export default connect(null, mapDispatchToProps)(LoginComponent)
