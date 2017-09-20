import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

const AuthTabs = () => {
  return (
    <div className={styles.tabs}>
      <Link to='/login' activeClassName={styles.tab_active} className={styles.tab}>sign in</Link>
      <Link to='/registration' activeClassName={styles.tab_active} className={styles.tab}>sign up</Link>
    </div>
  )
}

export default AuthTabs
