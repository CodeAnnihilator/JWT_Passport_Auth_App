import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'

class AuthenticatedHOC extends Component {
  componentWillMount() {
    const { authPending, isAuthenticated } = this.props
    if(!authPending && isAuthenticated) {
      this.props.history.push('/')
    }
  }
  componentWillReceiveProps(nextProps) {
    const { authPending, isAuthenticated } = nextProps
    if(!authPending && isAuthenticated) {
      nextProps.history.push('/')
    }
  }
  render() {
    const { component: Component, ...rest } = this.props
    const { isAuthenticated, authPending } = this.props
    return (
      <Route { ...rest }
        render={ props => (!authPending && !isAuthenticated)
          ? <Component { ...props } />
          : <div />
        }
      />
    )
  }
}

AuthenticatedHOC.propTypes = {
  authPending: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  authPending: state.auth.authPending,
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps)(AuthenticatedHOC))
