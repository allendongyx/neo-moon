
import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'
import IndexPage from './router/IndexPage'
import HomePage from './router/HomePage'
function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' component={IndexPage} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
