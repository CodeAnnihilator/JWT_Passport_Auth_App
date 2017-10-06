import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getVisibleProduct } from './currentProductSelectors'
import { getCurrentProduct } from './currentProductActions'

import CurrentProductComponent from './CurrentProductComponent'

const mapStateToProps = state => ({
  product: getVisibleProduct(state)
})

const mapDispatchToProps = dispatch => ({
  getCurrentProduct: id => dispatch(getCurrentProduct(id))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrentProductComponent))
