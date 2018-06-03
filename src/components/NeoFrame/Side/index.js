import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MonetizationOn from '@material-ui/icons/MonetizationOn'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
const index = (props) => {
  return (
    <List>
      <ListItem button component='a' href='/home'>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary='首页' />
      </ListItem>
      <ListItem button component='a' href='/wallet'>
        <ListItemIcon>
          <AccountBalanceWalletIcon />
        </ListItemIcon>
        <ListItemText primary='钱包' />
      </ListItem>
      <ListItem button component='a' href='/backup'>
        <ListItemIcon>
          <MonetizationOn />
        </ListItemIcon>
        <ListItemText primary='备份' />
      </ListItem>
    </List>
  )
}
index.propTypes = {
  // a: PropTypes.object
}
export default index
