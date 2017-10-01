import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from './Header'

export default class MainLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
        <Header userName='Mary'/>
        <div className={styles.page_width}>
          <div className={styles.layout}>
            { this.props.children }
          </div>
        </div>
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
