import React, { Component } from 'react'
import styles from './styles.css'

export default class PreloaderModal extends Component {
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          <div className={styles.preloader} />
          <div className={styles.info_wrapper}>
            <span className={styles.info_title}>{ `${'validation is in progress'}...` }</span>
            <span className={styles.info_description}>{ `${'checking user data'}...` }</span>
          </div>
        </div>
      </div>
    )
  }
}
