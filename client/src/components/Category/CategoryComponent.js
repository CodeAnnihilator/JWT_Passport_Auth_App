import React, { Component } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import tea from './tea.png'

export default class CategoryComponent extends Component {
  render() {
    return (
      <div className={styles.teas}>
        <Link to='' className={styles.tea}>
          <div className={styles.tea__title}>
            <img src={ tea } className={styles.tea__title__img} />
            <div className={styles.tea__title__text}>
              HISTORIC TEAS HISTORIC TEAS HISTORIC TEAS
            </div>
            <div className={ cn(styles.tea__title__price, styles.background_orange) }>RUB  <b>1,224.12</b></div>
          </div>
          <div className={styles.tea__text}>
            The most popular green tea in Japan,
            of which the leaves are prepared through steaming at a
            'simmering' temperature of around 94 °C (200 °F) for
            a gentle vegetal aroma. In China, Sencha tea is drunk hot
            in winter months and usually chilled in the summer months.
          </div>
        </Link>
      </div>
    )
  }
}
