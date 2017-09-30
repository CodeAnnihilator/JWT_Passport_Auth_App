import React, { Component } from 'react'
import Slider, { Range } from 'rc-slider'
// import '@rc-slider/index.css'

import styles from './styles.module.scss'

export default class Test extends Component {
  render() {
    return (
      <div>
        TEST
        <div className={styles.test}>
          hello!
          <span className={styles.test__item}>item</span>
        </div>
        <Slider />
        <Range />
      </div>
    )
  }
}
