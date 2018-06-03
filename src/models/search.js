import { getAccountState } from '../services/wallet'
import { routerRedux } from 'dva/router'
import * as ActionTypes from '../const/ActionTypes'
export default {
  namespace: 'search',
  state: {
    data: {},
    loading: false,
    fetchSuccess: false,
    isOpenDetailModal: false,
  },
  subscriptions: {
    setup ({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        let address = pathname.substring(pathname.lastIndexOf('/') + 1)
        if (pathname.replace('/' + address, '') === '/search') {
          dispatch({
            type: 'fetchSearch',
            payload: {
              address
            }
          })
          dispatch({
            type: ActionTypes.TRANSACTION_CLOSE_DETAIL
          })
        }
      })
    }
  },
  effects: {
    * fetchSearch ({ payload }, { call, put }) {
      yield put({ type: 'fetchRequest' })
      const { address } = payload
      const { data } = yield call(getAccountState, address)
      if (data) {
        yield put({ type: 'fetchSuccess', payload: data })
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
    }
  }
}
