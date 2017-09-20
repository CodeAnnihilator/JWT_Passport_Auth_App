import React, { Component } from 'react'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'
import styles from './styles.css'
import { fetch } from 'src/utils/fetch'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  updateField(field, value) {
    this.setState({ [field]: value })
  }

  render() {
    const { authorizeUser } = this.props
    const { email, password } = this.state
    return (
      <div className={styles.pageWrapper}>
        <Input onChange={e => this.updateField('email', e.target.value)}
          value={email}
          type='text'
          placeholder='Enter your email...'
          field='email'
        />
        <Input onChange={e => this.updateField('password', e.target.value)}
          value={password}
          type='password'
          placeholder='Enter your password...'
          field='password'
        />
        <Button label='login' onClick={() => authorizeUser(email, password)} />
      </div>
    )
  }
}
