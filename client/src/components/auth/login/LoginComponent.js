import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from 'src/partials/Input/Input'
import Button from 'src/partials/Button/Button'
import styles from './styles.css'

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
    let { formErrors, emailValid, passwordValid } = this.state
    if (fieldName === 'email') {
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
      formErrors.email = emailValid ? '' : ' is invalid'
    } else if (fieldName === 'password') {
      passwordValid = value.length >= 6
      formErrors.password = passwordValid ? '' : ' is too short'
    }
    this.setState({
      emailValid, passwordValid, formErrors,
      formValid: emailValid && passwordValid
    })
  }

  render() {
    const { login } = this.props
    const { email, password, formErrors, formValid } = this.state
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

Login.propTypes = {
  login: PropTypes.func.isRequired
}
