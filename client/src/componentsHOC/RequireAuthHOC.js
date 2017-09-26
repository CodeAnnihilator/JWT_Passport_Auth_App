import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default function(ComposedComponent) {

  class RequireAuthHOC extends Component {
    static propTypes = {
      history: PropTypes.object.isRequired,
      isAuthenticated: React.PropTypes.bool.isRequired
    }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        nextProps.history.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated }
  }

  return connect(mapStateToProps)(RequireAuthHOC)
}
