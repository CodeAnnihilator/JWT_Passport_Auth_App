import React from 'react'
import styles from './styles.css'

const Input = ({
  requirements,
  placeholder,
  onChange,
  error,
  type,
  name
}) => {
  const fieldText = name === 'password2' ? 'repeat password' : name
  return (
    <label className={styles.inputWrapper} htmlFor={name}>
      <span>
        <span className={styles.label}>{ `${fieldText}:` }</span>
        <span className={styles.label_description}>{ requirements }</span>
      </span>
      <input className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        type={type}
        id={name}
      />
      <span className={styles.error}>{ error }</span>
    </label>
  )
}

export default Input
