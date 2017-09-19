import React, { Component } from 'react'
import styles from './styles.css'

export default class Registration extends Component {
  render() {
    return (
      <div>
        <div className={styles.inputWrapper}>
          <label for='username'>
            <span className={styles.label}>Username:</span><br />
            <input className={styles.input} id='username' type='text' placeholder='Enter your username...' />
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label for='email'>
            <span className={styles.label}>Email:</span><br />
            <input className={styles.input} id='email' type='text' placeholder='Enter your email...' />
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label for='password'>
            <span className={styles.label}>Password:</span><br />
            <input className={styles.input} id='password' type='password' placeholder='Enter your password...' />
          </label>
        </div>
        <div className={styles.inputWrapper}>
          <label for='password2'>
            <span className={styles.label}>repeat password:</span><br />
            <input className={styles.input} id='password2' type='password' placeholder='Repeat password...' />
          </label>
        </div>
      </div>
    )
  }
}
