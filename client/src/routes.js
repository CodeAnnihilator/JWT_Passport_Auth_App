import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import AppLayout from './layouts/AppLayout/AppLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

import LoginContainer from './components/Auth/Login/LoginContainer'

const Test = () => 'test'

const Categories = ({ match }) => {
  return (
    <AppLayout>
      { console.log(match) }
      <Route
        path={`${match.url}/:name`}
        render={ ({ match }) => (
          <h3>{ match.params.name }</h3>
        )}
      />
    </AppLayout>
  )
}

const Routes = () => (
  <main>
    <MainLayout>
      <Route exact path='/login' render={() => <AuthLayout><LoginContainer /></AuthLayout>} />
      <Route exact path='/login/:id' render={() => <Test />} />
      <Route exact path='/cat/cat1' render={props => <Categories {...props} />} />
    </MainLayout>
  </main>
)

export default Routes


// import PrivateRoute from './componentsHOC/RequireAuthHOC'
// import PageNotFound from './components/PageNotFound/PageNotFound'
// import RegistrateContainer from './components/Auth/Registration/RegistrationContainer'
//
// import CategoriesComponent from './components/Categories/CategoriesComponent'

// const Categories = ({ match }) => {
//   return (
//     <AppLayout>
//       { console.log(match) }
//       <Route
//         path={`${match.url}/:name`}
//         render={ ({ match }) => (
//           <h3>{ match.params.name }</h3>
//         )}
//       />
//     </AppLayout>
//   )
// }

// <MainLayout>
//   <Switch>
//     <Redirect exact from='/' to='/categories'/>
//     // <Route exact path='/categories' render={() => <AppLayout><CategoriesComponent /></AppLayout>} />
//     // <PrivateRoute exact path='/categories/:id' component={() => <AppLayout><Test /></AppLayout>} />
//     <Route path='/categoriess' render={props => <Categories {...props} />} />
//     <Route exact path='/categories/:id/products' render={() => <AppLayout>CATEGORY PRODUCTS!</AppLayout>} />
//     <Route exact path='/categories/:id/products/:id' render={() => <AppLayout>CURRENT SINGLE PRODUCT!</AppLayout>} />
//     <Route exact path='/login' render={() => <AuthLayout><LoginContainer /></AuthLayout>} />
//     <Route exact path='/registration' render={() => <AuthLayout><RegistrateContainer /></AuthLayout>} />
//     <Route component={PageNotFound} />
//   </Switch>
// </MainLayout>
