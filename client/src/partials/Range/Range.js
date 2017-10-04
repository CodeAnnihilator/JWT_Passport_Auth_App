import React, { Component } from 'react'
import { Range as RangeUI } from 'rc-slider'
import '@rc-slider/index.css'

import './styles.css'

export default class Range extends Component {
  render() {
    return (
      <div className='range_config'>
        <RangeUI />
      </div>
    )
  }
}
