import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CircularProgress from '@material-ui/core/CircularProgress'
import NeoTransactions from '../../components/NeoTransactions'
import QRCode from 'qrcode.react'
import Typography from '@material-ui/core/Typography'
import styles from './index.scss'
import * as ActionTypes from '../../const/ActionTypes'
const SearchPage = (props) => {
  const { loading, fetchSuccess, data, transaction } = props
  const { address } = props.match.params
  let GasBalance = '0.0'
  let NeoBalance = '0.0'
  if (fetchSuccess) {
    const GasData = data.filter(item => {
      return item.name === 'GAS'
    })[0]
    if (GasData) {
      GasBalance = GasData.balances
    }
    const NeoData = data.filter(item => {
      return item.name === 'NEO'
    })[0]
    console.log('NeoData: ', NeoData)
    if (NeoData) {
      NeoBalance = NeoData.balances
    }
  }
  const TransactionProps = {
    onOpenDetailModal: (payload) => {
      props.dispatch({
        type: ActionTypes.TRANSACTION_OPEN_DETAIL,
        payload
      })
    },
    onCloseDetailModal: (payload) => {
      props.dispatch({
        type: ActionTypes.TRANSACTION_CLOSE_DETAIL
      })
    }
  }
  return [
    <Card>
      <CardContent>
        <h3>地址：{address}</h3>
        {
          loading && <CircularProgress className={styles.progress} size={65} />
        }
        {
          fetchSuccess && <List>
            <ListItem>
              <ListItemText primary='Hash' secondary={address} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Neo财产' secondary={NeoBalance} />
            </ListItem>
            <ListItem>
              <ListItemText primary='Gas财产' secondary={GasBalance} />
            </ListItem>
          </List>
        }
        {
          fetchSuccess && <div className={styles.qrcode}>
            <QRCode value={address} />
            <Typography align='center'>{address}</Typography>
            <Typography align='center'>钱包二维码</Typography>
          </div>
        }
      </CardContent>
    </Card>,
    <NeoTransactions {...TransactionProps} transaction={transaction} />
  ]
}
SearchPage.propTypes = {
  // a: PropTypes.object
}

function mapDispatchToProps ({ search, transaction }) {
  return {
    data: search.data,
    loading: search.loading,
    fetchSuccess: search.fetchSuccess,
    transaction: transaction
  }
}
export default connect(mapDispatchToProps)(SearchPage)
