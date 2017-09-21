import React from 'react'
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

export default Button
