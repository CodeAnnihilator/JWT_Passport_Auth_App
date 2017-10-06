import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import SubHeaderComponent from './SubHeaderComponent'

import {
  setCurrentPrice,
  changeOrder
} from '@src/components/CategoryProducts/categoryProductsActions'

const mapStateToProps = state => ({
  minPrice: state.category_products.minPrice,
  maxPrice: state.category_products.maxPrice,
})

const mapDispatchToProps = dispatch => ({
  setCurrentPrice: (price, field) => dispatch(setCurrentPrice(price, field)),
  changeOrder: value => dispatch(changeOrder(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubHeaderComponent))
