import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainLayout from './layouts/MainLayout/MainLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import RequireAuthHOC from './componentsHOC/RequireAuthHOC'
import PageNotFound from './components/PageNotFound/PageNotFound'
// import AuthLayoutContainer from './layouts/auth/AuthLayoutContainer'
import LoginContainer from './components/Auth/Login/LoginContainer'
// import RegistrateContainer from './components/auth/registration/RegistrationContainer'
import App from './components/App'


const Routes = () => (
  <main>
    <MainLayout>
      <Switch>
        <Route path='/' exact component={RequireAuthHOC(App)} />
        <AuthLayout>
          <Route path='/login' component={LoginContainer} />
          <Route path='/registration' component={() => <div>REGISTRATION</div>} />
        </AuthLayout>
        <Route component={PageNotFound} />
      </Switch>
    </MainLayout>
  </main>
)

export default Routes
