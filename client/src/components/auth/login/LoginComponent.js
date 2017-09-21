import React, { Component } from 'react'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'
import styles from './styles.css'
import { fetch } from 'src/utils/fetch'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      passwordValid: false,
      formErrors: { email: '', password: '' },
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
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        break;
      case 'password':
        passwordValid = value.length >= 6
        fieldValidationErrors.password = passwordValid ? '' : ' is too short'
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

  validateForm = () => this.setState({
    formValid: this.state.emailValid && this.state.passwordValid
  })

  render() {
    const { login } = this.props
    const {
      email,
      password,
      formErrors,
      formValid
    } = this.state
    return (
      <div className={styles.pageWrapper}>
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
        <Button onClick={() => login(email, password)}
          isDisabled={!formValid}
          label='login'
        />
      </div>
    )
  }
}
