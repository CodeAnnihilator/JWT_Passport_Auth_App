import React, { Component } from 'react'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'
import styles from './styles.css'

export default class Login extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <Input type='text' placeholder='Enter your email...' field='email'/>
        <Input type='password' placeholder='Enter your password...' field='password'/>
        <Button label='login' />
      </div>
    )
  }
}
