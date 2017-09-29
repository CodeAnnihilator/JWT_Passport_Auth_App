import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import RequireAuthHOC from '@src/componentsHOC/RequireAuthHOC'

class AppLayout extends Component {
  render() {
    return (
      <div>
        <h1>FUTURE NAVBAR</h1>
        { this.props.children }
      </div>
    )
  }
}

export default AppLayout

AppLayout.propTypes = {
  children: PropTypes.object.isRequired
}
