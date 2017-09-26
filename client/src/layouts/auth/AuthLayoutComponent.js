import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import LeftSideDescription from './components/LeftSideDescription/LeftSideDescription'
import AuthTabs from './components/AuthTabs/AuthTabs'

import PreloaderModal from 'src/partials/PreloaderModal/PreloaderModal'

import styles from './style.css'

export default class AuthLayoutComponent extends Component {
  render() {
    const {
      authPending,
      inProgressMessage,
      descriptionMessage,
      isAuthenticated
    } = this.props
    return (
      <div className={styles.page_wrapper}>
        {
          authPending &&
            <PreloaderModal
              inProgressMessage={inProgressMessage}
              descriptionMessage={descriptionMessage}
            />
        }
        <div className={styles.card_wrapper}>
          <LeftSideDescription />
          <div className={styles.form_wrapper}>
            <AuthTabs />
            <div className={styles.form_container}>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AuthLayoutComponent.propTypes = {
  authPending: PropTypes.bool.isRequired,
  inProgressMessage: PropTypes.string.isRequired,
  descriptionMessage: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object
}
