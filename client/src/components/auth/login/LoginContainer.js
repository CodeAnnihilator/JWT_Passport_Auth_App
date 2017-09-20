import { connect } from 'react-redux'
import { authorize } from './LoginActions'

import LoginComponent from './LoginComponent'

const mapDispatchToProps = dispatch => ({
  authorizeUser: (email, password) => dispatch(authorize(email, password))
})

export default connect(null, mapDispatchToProps)(LoginComponent)
