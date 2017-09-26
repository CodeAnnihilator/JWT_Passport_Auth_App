import React, { Component, PropTypes } from 'react'
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
  children: PropTypes.object
}
