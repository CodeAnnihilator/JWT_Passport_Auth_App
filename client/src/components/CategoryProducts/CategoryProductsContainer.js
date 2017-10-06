import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CategoryProductsComponent from './CategoryProductsComponent'
import { getCategoryProducts } from './categoryProductsActions'
import { getVisibleProducts } from './categoryProductsSelectors'

const mapStateToProps = state => ({
  products: getVisibleProducts(state)
})

const mapDispatchToProps = dispatch => ({
  getCategoryProducts: catId => dispatch(getCategoryProducts(catId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryProductsComponent))
