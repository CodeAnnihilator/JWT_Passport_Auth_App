import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { withRouter } from 'react-router-dom'

import styles from './styles.module.scss'
import Range from '@src/partials/Range/Range'

class SubHeader extends Component {
  render() {
    const renderUI = (
      <div className={cn(styles.header__line, styles.background, styles.background_black)}>
        <div className={styles.header__line__item} style={{ width: '73%' }}>
          <div className={styles.range}>
            <div className={styles.range__title}>
              <span className={styles.range__title__info}>PRICE RANGE: </span>
              <span className={styles.range__title__price}> 1200</span>
              <span className={styles.range__title__description}> RUR to</span>
              <span className={styles.range__title__price}> 2000</span>
              <span className={styles.range__title__description}> RUR</span>
            </div>
            <Range />
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
