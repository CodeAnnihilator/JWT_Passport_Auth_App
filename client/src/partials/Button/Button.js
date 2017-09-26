import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import cn from 'classnames'

const Button = ({ label, onClick, isDisabled }) => {
  return (
    <button
      className={ cn(styles.button, isDisabled ? styles.disabled : '') }
      onClick={ isDisabled ? '' : onClick}
    >{ label }</button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Button
