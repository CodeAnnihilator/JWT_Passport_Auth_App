import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

export default class MainLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
        { this.props.children }
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
