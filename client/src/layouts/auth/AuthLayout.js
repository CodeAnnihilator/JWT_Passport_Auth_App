import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './style.css'
import LeftSideDescription from './components/LeftSideDescription/LeftSideDescription'
import AuthTabs from './components/AuthTabs/AuthTabs'

export default class AuthLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
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
