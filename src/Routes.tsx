import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'

const Routes = () => {
  return (<div>
    <HashRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/shop' component={Shop} />
      </Switch>
    </HashRouter>
  </div>)
}

export default Routes