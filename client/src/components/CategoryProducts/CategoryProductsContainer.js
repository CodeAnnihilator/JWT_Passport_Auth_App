import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CategoryProductsComponent from './CategoryProductsComponent'
import { getCategoryProducts } from './categoryProductsActions'

const mapStateToProps = state => ({
  products: state.category_products.products
})

const mapDispatchToProps = dispatch => ({
  getCategoryProducts: catId => dispatch(getCategoryProducts(catId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryProductsComponent))
