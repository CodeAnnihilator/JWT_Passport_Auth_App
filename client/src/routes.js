import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import AppLayout from '@src/layouts/AppLayout/AppLayout'
import MainLayout from '@src/layouts/MainLayout/MainLayout'
import AuthLayout from '@src/layouts/AuthLayout/AuthLayout'

import LoginContainer from '@src/components/Auth/Login/LoginContainer'
import RegistrateContainer from './components/Auth/Registration/RegistrationContainer'
import PageNotFound from './components/PageNotFound/PageNotFound'

import PrivateRoute from './componentsHOC/RequireAuthHOC'
import AuthRoute from './componentsHOC/AuthenticatedHOC'

import CategoriesComponent from '@src/components/Categories/CategoriesComponent'
import CategoryComponent from '@src/components/Category/CategoryComponent'
import ProductComponent from '@src/components/Product/ProductComponent'

const Routes = () => (
  <MainLayout>
    <Switch>
      <Redirect exact from='/' to='/categories'/>
      <PrivateRoute exact path='/categories' component={() => <CategoriesComponent />} />
      <PrivateRoute exact path='/categories/:cat_id' component={() => <CategoryComponent />} />
      <PrivateRoute exact path='/categories/:cat_id/products/:prod_id' component={() => <ProductComponent />} />
      <AuthRoute exact path='/login' component={() => <AuthLayout><LoginContainer /></AuthLayout>} />
      <AuthRoute exact path='/registration' component={() => <AuthLayout><RegistrateContainer /></AuthLayout>} />
      <Route component={PageNotFound} />
    </Switch>
  </MainLayout>
)

export default Routes
