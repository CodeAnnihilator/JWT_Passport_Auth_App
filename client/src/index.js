import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import { authTokenSuccess } from 'src/components/auth/login/LoginActions'


import Cookies from 'universal-cookie'
const cookies = new Cookies()

import routes from './routes'
import './styles/styles.css'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

const token = cookies.get('token')

if (token) {
  store.dispatch(authTokenSuccess(token))
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
