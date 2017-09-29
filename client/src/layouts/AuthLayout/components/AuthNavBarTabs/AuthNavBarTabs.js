import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.css'

const AuthNavBarTabs = () => {
  return (
    <div className={styles.tabs}>
      <NavLink to='/categoriess' className={styles.tab}>Categoriess</NavLink>
      <NavLink to='/categoriess/21' className={styles.tab}>Categoriess21</NavLink>
      <NavLink to='/login' activeClassName={styles.tab_active} className={styles.tab}>sign in</NavLink>
      <NavLink to='/registration' activeClassName={styles.tab_active} className={styles.tab}>sign up</NavLink>
    </div>
  )
}

export default AuthNavBarTabs
