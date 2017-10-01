import React, { Component } from 'react'
import { Range } from 'rc-slider'
import '@rc-slider/index.css'

import './styles.css'

export default class RangeContainer extends Component {
  render() {
    return (
      <div className='range_config'>
        <Range/>
      </div>
    )
  }
}
