import React, { Component } from 'react'
import styles from './styles.css'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'

export default class Registration extends Component {
  render() {
    return (
      <div className={styles.pageWrapper}>
        <Input type='text' placeholder='Enter your username...' field='username'/>
        <Input type='text' placeholder='Enter your email...' field='email'/>
        <Input type='password' placeholder='Enter your password...' field='password'/>
        <Input type='password' placeholder='Repeat password...' field='password2'/>
        <Button label='register' />
      </div>
    )
  }
}
