import React, { Component } from 'react'
import { Link } from 'react-router'

import LeftSideDescription from './components/LeftSideDescription/LeftSideDescription'
import AuthTabs from './components/AuthTabs/AuthTabs'

import PreloaderModal from 'src/partials/PreloaderModal/PreloaderModal'

import styles from './style.css'

export default class AuthLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
        { /*<PreloaderModal />*/ }
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
