import React, { Component } from 'react'
import styles from './styles.css'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'

export default class Registration extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  updateField(field, value) {
    this.setState({ [field]: value })
  }

  render() {
    const { registerUser } = this.props
    const { username, email, password, password2 } = this.state
    return (
      <div className={styles.pageWrapper}>
        <Input onChange={e => this.updateField('username', e.target.value)}
          value={username}
          type='text'
          placeholder='Enter your username...'
          field='username'
        />
        <Input onChange={e => this.updateField('email', e.target.value)}
          value={email}
          type='text'
          placeholder='Enter your email...'
          field='email'
        />
        <Input onChange={e => this.updateField('password', e.target.value)}
          type='password'
          placeholder='Enter your password...'
          field='password'
        />
        <Input onChange={e => this.updateField('password2', e.target.value)}
          value={password2}
          type='password'
          placeholder='Repeat password...'
          field='password2'
        />
        <Button label='register' onClick={() => registerUser(username, email, password, password2)} />
      </div>
    )
  }
}
