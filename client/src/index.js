import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { configureStore, history } from './store/configureStore'
import './styles/styles.css'

import { authTokenSuccess, authTokenError } from '@src/components/Auth/Login/loginActions'
import Routes from './routes'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

const store = configureStore()
const token = cookies.get('token')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)

if (token) {
  store.dispatch(authTokenSuccess(token))
} else {
  store.dispatch(authTokenError())
}

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
