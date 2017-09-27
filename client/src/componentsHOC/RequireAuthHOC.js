import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {
  class RequireAuthHOC extends Component {
    componentWillMount() {
      // NOTE: with react fiber prop-types module is not working correctly with HOC props
      if (!this.props.isAuthenticated) { // eslint-disable-line
        // this.props.history.push('/login') // eslint-disable-line
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        // nextProps.history.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })
  return connect(mapStateToProps)(RequireAuthHOC)
}
