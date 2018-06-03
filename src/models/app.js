import { routerRedux } from 'dva/router'
export default {
  namespace: 'app',
  state: {
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch(routerRedux.push('/home'))
        }
      })
    }
  },
  effects: {
  },
  reducers: {
  }
}
