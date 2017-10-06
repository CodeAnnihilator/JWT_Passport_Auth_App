import React, { Component } from 'react'
import { Range as RangeUI } from 'rc-slider'
import '@rc-slider/index.css'

import './styles.css'

export default class Range extends Component {

  render() {
    return (
      <div className='range_config'>
        <RangeUI
          onChange={this.props.onChange}
          onAfterChange={this.props.onMouseUp}
          value={[
            this.props.minCurrentValue,
            this.props.maxCurrentValue
          ]}
          min={this.props.minValue}
          max={this.props.maxValue}
        />
      </div>
    )
  }
}
