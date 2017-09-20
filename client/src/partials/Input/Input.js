import React from 'react'
import styles from './styles.css'

const Input = ({ type, placeholder, field, onChange }) => {
  const fieldText = field === 'password2' ? 'repeat password' : field
  return (
    <label className={styles.inputWrapper} htmlFor={field}>
      <span className={styles.label}>{ `${fieldText}:` }</span>
      <input onChange={onChange} className={styles.input} id={field} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Input
