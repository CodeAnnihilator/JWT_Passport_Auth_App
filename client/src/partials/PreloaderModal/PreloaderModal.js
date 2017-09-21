import React, { Component } from 'react'
import styles from './styles.css'

const successStatuses = {
  1: 'pending',
  2: 'success',
  3: 'error'
}

export default class PreloaderModal extends Component {
  render() {
    const {
      // isInProgress,
      // successStatus,
      inProgressMessage,
      descriptionMessage
    } = this.props
    return (
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div className={styles.preloader} />
          <div className={styles.info_wrapper}>
            <span className={styles.info_title}>{ `${inProgressMessage}...` }</span>
            <span className={styles.info_description}>{ `${descriptionMessage}...` }</span>
          </div>
        </div>
      </div>
    )
  }
}
