import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './styles.module.scss'

const stylesTypes = {
  auth: styles.button_auth,
  logout: styles.button_logout,
  back: styles.button_back
}

const Button = ({ label, onClick, isDisabled, styleType }) => (
  <button
    className={ cn(styles.button, stylesTypes[styleType]) }
    onClick={onClick}
    disabled={isDisabled}
  >{ label }</button>
)

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  styleType: PropTypes.string.isRequired
}

export default Button
