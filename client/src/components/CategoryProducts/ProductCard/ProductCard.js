import React, { Component } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import tea from './tea.png'

const definePriceColor = price => {
  if (price <= 1000) return 'green'
  if (price <= 3000) return 'orange'
  return 'red'
}

export default class ProductCard extends Component {
  render() {
    const { product, linkTo } = this.props
    const priceColor = definePriceColor(product.price)
    return (
      <Link to={linkTo} className={styles.tea}>
        <div className={styles.tea__title}>
          <img src={tea} className={styles.tea__title__img} />
          <div className={styles.tea__title__text}>{ product.title }</div>
          <div className={ cn(styles.tea__title__price, styles[`background_${priceColor}`]) }>
            <span>RUB </span>
            <strong>{ parseInt(product.price, 10) }</strong>
          </div>
        </div>
        <div className={styles.tea__text}>{ product.desc }</div>
      </Link>
    )
  }
}
