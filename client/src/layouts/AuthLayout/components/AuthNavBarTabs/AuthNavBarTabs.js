import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.css'

const AuthNavBarTabs = () => {
  return (
    <div className={styles.tabs}>
      <NavLink to='/login' activeClassName={styles.tab_active} className={styles.tab}>sign in</NavLink>
      <NavLink to='/registration' activeClassName={styles.tab_active} className={styles.tab}>sign up</NavLink>
    </div>
  )
}

export default AuthNavBarTabs
