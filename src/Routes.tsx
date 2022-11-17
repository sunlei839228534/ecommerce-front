import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/core/Home'
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
      </Switch>
    </HashRouter>
  </div>)
}

export default Routes