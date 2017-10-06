import { createSelector } from 'reselect'

import sort from '@src/utils/sort'
import sortReverse from '@src/utils/sortReverse'

const getProducts = state => state.category_products.products
const getProductsOrder = state => state.category_products.order
const getCurrentMinPrice = state => state.category_products.currentMinPrice
const getCurrentMaxPrice = state => state.category_products.currentMaxPrice

const sortConvention = {
  'desc': sortReverse,
  'asc': sort
}

export const getVisibleProducts = createSelector(
  [ getProducts, getProductsOrder, getCurrentMinPrice, getCurrentMaxPrice ],
  (products, order, currentMin, currentMax) => {
    const sortedProducts = products.length
      ? sortConvention[order](products, 'price')
      : products
    const filteredProducts = sortedProducts
      .filter(product => (
        parseInt(product.price, 10) >= currentMin &&
        parseInt(product.price, 10) <= currentMax)
      )
    return filteredProducts
  }
)
