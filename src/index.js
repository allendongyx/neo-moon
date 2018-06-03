import dva, { connect } from 'dva'
import fetch from 'dva/fetch'
import React from 'react'
import createHistory from 'history/createBrowserHistory'
require('./utils/lang')
// 1. Initialize
const app = dva({
  history: createHistory()
})
// 2. Model
// Remove the comment and define your model.
app.model(require('./models/search'))
app.model(require('./models/transaction'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
