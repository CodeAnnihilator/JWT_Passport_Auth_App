import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'

class PrivateRoute extends Component {
  // componentWillMount() {
  //   const { authTokenPending, isAuthenticated } = this.props
  //   if(!authTokenPending && !isAuthenticated) {
  //     this.props.history.push('/login')
  //   }
  // }
  componentWillReceiveProps(nextProps) {
    const { authTokenPending, isAuthenticated } = nextProps
    if(!authTokenPending && !isAuthenticated) {
      // nextProps.history.push('/login')
    }
  }
  render() {
    const { component: Component, ...rest } = this.props
    const { isAuthenticated } = this.props
    return (
      <Route { ...rest }
        render={ props => isAuthenticated
          ? <Component { ...props } />
          : 'LOADING...'
        }
      />
    )
  }
}

const mapStateToProps = state => ({
  authTokenPending: state.auth.authTokenPending,
  isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
