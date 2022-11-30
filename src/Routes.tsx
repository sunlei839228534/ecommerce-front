import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AddCatgory from './components/admin/AddCatgory'
import AddProduct from './components/admin/AddProduct'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminRoute from './components/admin/AdminRoute'
import Dashboard from './components/admin/Dashboard'
import PrivateRoute from './components/admin/PrivateRoute'
import Home from './components/core/Home'
import Product from './components/core/Product'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'


const Routes = () => {
  return (<div>
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop' component={Shop} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
        <PrivateRoute path="/user/dashboard" component={Dashboard}></PrivateRoute>
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute path="/create/category" component={AddCatgory} />
        <AdminRoute path="/create/product" component={AddProduct} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    </HashRouter>
  </div>)
}

export default Routes