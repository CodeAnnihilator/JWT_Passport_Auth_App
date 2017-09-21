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
      password2: '',

    }
  }

  updateField = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { registerUser } = this.props
    const { username, email, password, password2 } = this.state
    return (
      <div className={styles.pageWrapper}>
        <Input onChange={this.updateField}
          value={username}
          type='text'
          placeholder='Enter your username...'
          name='username'
        />
        <Input onChange={this.updateField}
          value={email}
          type='text'
          placeholder='Enter your email...'
          name='email'
        />
        <Input onChange={this.updateField}
          requirements='min 5 signs'
          type='password'
          placeholder='Enter your password...'
          name='password'
        />
        <Input onChange={this.updateField}
          value={password2}
          type='password'
          placeholder='Repeat password...'
          name='password2'
        />
        <Button label='register' onClick={() => registerUser(username, email, password, password2)} />
      </div>
    )
  }
}
