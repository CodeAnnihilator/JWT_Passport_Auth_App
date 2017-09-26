import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {

  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }
    static propTypes = {
      isAuthenticated: React.PropTypes.bool.isRequired
    }
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        return this.context.router.push('/login')
      }
    }
    componentWillUpdate(nextProps) {
      if(!nextProps.isAuthenticated) {
        this.context.router.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
