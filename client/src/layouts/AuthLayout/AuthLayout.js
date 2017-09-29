import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'

import AppDescription from './components/AppDescription/AppDescription'
import AuthNavBarTabs from './components/AuthNavBarTabs/AuthNavBarTabs'

export default class AuthLayout extends Component {
  render() {
    return (
      <div className={styles.card_wrapper}>
        <AppDescription />
        <div className={styles.form_wrapper}>
          <AuthNavBarTabs />
          <div className={styles.form_container}>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

AuthLayout.propTypes = {
  children: PropTypes.object.isRequired
}
