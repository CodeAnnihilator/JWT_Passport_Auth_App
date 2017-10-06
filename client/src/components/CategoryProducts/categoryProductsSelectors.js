import { createSelector } from 'reselect'

const getProducts = state => state.category_products.products
const getProductsOrder = state => state.category_products.order
const getCurrentMinPrice = state => state.category_products.currentMinPrice
const getCurrentMaxPrice = state => state.category_products.currentMaxPrice

export const getVisibleProducts = createSelector(
  [ getProducts, getProductsOrder, getCurrentMinPrice, getCurrentMaxPrice ],
  (products, order, currentMin, currentMax) => products.filter(
    product => (parseInt(product.price, 10) >= currentMin && parseInt(product.price, 10) <= currentMax)
  )
)
