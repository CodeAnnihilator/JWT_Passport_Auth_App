import React, { Component } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import ProductCard from './ProductCard/ProductCard'

import styles from './styles.module.scss'

export default class CategoryComponent extends Component {
  componentWillMount() {
    const { cat_id } = this.props.match.params
    this.props.getCategoryProducts(cat_id)
  }
  render() {
    const {
      products
    } = this.props
    return (
      <div className={styles.teas}>
        {
          products.map(product =>
            <ProductCard
              key={product.id}
              product={product}
              linkTo={`${product.catId}/products/${product.id}`}
            />
          )
        }
      </div>
    )
  }
}
