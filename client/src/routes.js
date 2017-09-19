import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import AuthLayout from './layouts/auth/AuthLayout'
import Login from './components/auth/login/Login'
import Registration from './components/auth/registration/Registration'

export default (
  <Route component={AuthLayout}>
    <Route path='/login' component={Login}/>
    <Route path='/registration' component={Registration} />
  </Route>
)
