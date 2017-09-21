import React, { Component } from 'react'
import styles from './styles.css'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'

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
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let password2Valid = this.state.password2Valid
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break;
      case 'password':
        passwordValid = value.length >= 6
        password2Valid = this.state.password2 === value
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
        fieldValidationErrors.password2 = password2Valid ? '' : ' passwords don\'t match'
        break;
      case 'password2':
        password2Valid = this.state.password === value
        fieldValidationErrors.password2 = password2Valid ? '' : ' passwords don\'t match'
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm())
  }

  validateForm = () => this.setState({ formValid: this.state.emailValid && this.state.passwordValid })

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
        <Button onClick={() => registerUser(username, email, password, password2)}
          isDisabled={!formValid}
          label='register'
        />
      </div>
    )
  }
}
