import React, { Component } from 'react'

import styles from './styles.module.scss'
import tea1 from './tea1.png'
import Button from '@src/partials/Button/Button'

export default class CurrentProduct extends Component {
  componentWillMount() {
    this.props.getCurrentProduct(this.props.match.params.prod_id)
  }
  render() {
    const { product } = this.props
    const { cat_id } = this.props.match.params
    return (
      <div className={styles.tea}>
        <div className={styles.tea__header}>
          <Button
            label='BACK TO CATEGORY'
            styleType='back'
            onClick={() => this.props.history.push(`/categories/${cat_id}`)}
          />
        </div>
        <div className={styles.tea__img}>
          <img src={tea1} className={styles.img} />
        </div>
        <div className={styles.tea__title}>{ product && product.title }</div>
        <div className={styles.tea__description}>{ product && product.full_desc }</div>
      </div>
    )
  }
}
