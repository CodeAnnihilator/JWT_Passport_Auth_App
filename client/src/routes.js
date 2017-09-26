import React from 'react'
import { Route, IndexRoute } from 'react-router'
import MainLayout from './layouts/main/MainLayout'
import AuthLayoutContainer from './layouts/auth/AuthLayoutContainer'
import NotFoundPage from './layouts/NotFound/NotFoundPage'
import LoginContainer from './components/auth/login/LoginContainer'
import RegistrateContainer from './components/auth/registration/RegistrationContainer'
import RequireAuthHOC from './components/auth/RequireAuthHOC'

export default (
  <Route path="/">
    <IndexRoute component={RequireAuthHOC(MainLayout)} />
    <Route component={AuthLayoutContainer}>
      <Route path='/login' component={LoginContainer}/>
      <Route path='/registration' component={RegistrateContainer} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
)
