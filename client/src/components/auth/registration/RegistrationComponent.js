import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Input from '@src/partials/Input/Input'
import Button from '@src/partials/Button/Button'

export default class Registration extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      usernameValid: false,
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      password2: '',
      password2Valid: false,
      formErrors: { username: '', email: '', password: '', password2: '' },
      formValid: false
    }
  }

  handleChangeInput = e => {
    const { name, value } = e.target
    this.setState({ [name]: value }, () => this.validateField(name, value))
  }

  validateField = (fieldName, value) => {
    // NOTE: to make it look shorter, switch case was replaced with if else statements
    let { formErrors, formValid, usernameValid, emailValid, passwordValid, password2Valid } = this.state
    if (fieldName === 'username') {
      usernameValid = value !== ''
      formErrors.username = usernameValid ? '' : ' can\'t be empty'
    } else if (fieldName === 'email') {
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      formErrors.email = emailValid ? '' : ' is invalid'
    } else if (fieldName === 'password') {
      passwordValid = value.length >= 6
      password2Valid = this.state.password2 === value
      formErrors.password = passwordValid ? '' : ' is too short'
      formErrors.password2 = password2Valid ? '' : ' passwords don\'t match'
    } else if (fieldName === 'password2') {
      password2Valid = this.state.password === value
      formErrors.password2 = password2Valid ? '' : ' passwords don\'t match'
    }
    this.setState({
      usernameValid, emailValid, passwordValid, password2Valid, formErrors,
      formValid: usernameValid && emailValid && passwordValid && password2Valid
    })
  }

  render() {
    const { registerUser } = this.props
    const { username, email, password, password2, formErrors, formValid } = this.state
    return (
      <div className={styles.pageWrapper}>
        <Input onChange={this.handleChangeInput}
          error={formErrors.username}
          value={username}
          placeholder='Enter your username...'
          type='text'
          name='username'
        />
        <Input onChange={this.handleChangeInput}
          error={formErrors.email}
          value={email}
          placeholder='Enter your email...'
          type='text'
          name='email'
        />
        <Input onChange={this.handleChangeInput}
          error={formErrors.password}
          value={password}
          requirements='min 6 signs'
          placeholder='Enter your password...'
          type='password'
          name='password'
        />
        <Input onChange={this.handleChangeInput}
          error={formErrors.password2}
          value={password2}
          placeholder='Repeat password...'
          type='password'
          name='password2'
        />
        <Button onClick={() => registerUser(username, email, password)}
          isDisabled={!formValid}
          label='register'
        />
      </div>
    )
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired
}
