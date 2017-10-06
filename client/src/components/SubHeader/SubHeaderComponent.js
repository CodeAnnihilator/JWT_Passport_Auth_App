import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { withRouter } from 'react-router-dom'

import styles from './styles.module.scss'
import Range from '@src/partials/Range/Range'

class SubHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minCurrentValue: 0,
      maxCurrentValue: 0,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      minPrice: nextProps.minPrice,
      maxPrice: nextProps.maxPrice,
      minCurrentValue: nextProps.minPrice,
      maxCurrentValue: nextProps.maxPrice,
    })
  }
  changeRangeValue = value => this.setState({
    minCurrentValue: value[0],
    maxCurrentValue: value[1]
  })
  onRangeMouseUp = e => {
    const { setCurrentPrice } = this.props
    setCurrentPrice(this.state.minCurrentValue, 'currentMinPrice')
    setCurrentPrice(this.state.maxCurrentValue, 'currentMaxPrice')
  }
  render() {
    const {
      minPrice,
      maxPrice
    } = this.props
    const renderUI = (
      <div className={cn(styles.header__line, styles.background, styles.background_black)}>
        <div className={styles.header__line__item} style={{ width: '73%' }}>
          <div className={styles.range}>
            <div className={styles.range__title}>
              <span className={styles.range__title__info}>PRICE RANGE: </span>
              <span className={styles.range__title__price}>{ this.state.minCurrentValue }</span>
              <span className={styles.range__title__description}> RUR to </span>
              <span className={styles.range__title__price}>{ this.state.maxCurrentValue }</span>
              <span className={styles.range__title__description}> RUR</span>
            </div>
            <Range
              onChange={this.changeRangeValue}
              onMouseUp={this.onRangeMouseUp}
              minValue={minPrice}
              maxValue={maxPrice}
              minCurrentValue={this.state.minCurrentValue}
              maxCurrentValue={this.state.maxCurrentValue}
            />
          </div>
        </div>
        <div className={styles.header__line__item} style={{ marginLeft: 25 }}>
          <div className={styles.sort_by}>SORT BY</div>
          <select className={styles.sort}>
            <option>PRICE DESCENDING</option>
            <option>PRICE ASCENDING</option>
          </select>
        </div>
      </div>
    )
    const isCertainCategory = /categories\/\d\/?$/.test(this.props.location.pathname)
    return isCertainCategory ? renderUI : <div />
  }
}

SubHeader.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(SubHeader)
