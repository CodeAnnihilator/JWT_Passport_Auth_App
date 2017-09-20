import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { loginSuccess } from 'src/components/auth/login/LoginActions'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

import routes from './routes'
import './styles/styles.css'

const store = configureStore()

const token = cookies.get('token')
const userId = cookies.get('userId')

if (token && userId) {
  store.dispatch({ type: loginSuccess(token, userId) })
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
