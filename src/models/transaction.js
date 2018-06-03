import { queryTransaction } from '../services/wallet'

export default {
  namespace: 'transaction',
  state: {
    data: {},
    loading: false,
    fetchSuccess: false,
    isOpenDetail: false,
    detail: {}
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        let address = pathname.substring(pathname.lastIndexOf('/') + 1)
        if (pathname.replace('/' + address, '') === '/search') {
          dispatch({
            type: 'fetch',
            payload: {
              address
            }
          })
        }
      })
    }
  },
  effects: {
    * fetch ({ payload }, { call, put }) {
      yield put({ type: 'fetchRequest' })
      const { address } = payload
      const { data } = yield call(queryTransaction, address)
      if (data) {
        yield put({ type: 'fetchSuccess', payload: data.TransactionQuery })
      } else {
        yield put({ type: 'fetchFailed' })
      }
    }
  },
  reducers: {
    fetchRequest (state) {
      return {
        ...state,
        ...{
          loading: true
        }
      }
    },
    fetchSuccess (state, { payload: data }) {
      return {
        ...state,
        ...{
          data,
          loading: false,
          fetchSuccess: true
        }
      }
    },
    fetchFailed (state) {
      return state
    },
    openDetailModal (state, { payload }) {
      return {
        ...state,
        ...{
          detail: payload,
          isOpenDetail: true
        }
      }
    },
    closeDetailModal (state, { payload: data }) {
      return {
        ...state,
        ...{
          detail: {},
          isOpenDetail: false
        }
      }
    }
  }
}
