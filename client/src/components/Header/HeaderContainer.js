import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { logout } from '@src/components/Auth/Login/loginActions'

import Header from './HeaderComponent'

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  userName: state.auth.username
})

const mapDispatchToProps = dispatch => ({
  logout: (email, password) => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
