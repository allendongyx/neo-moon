import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import NeoSearch from '../NeoSearch'
import styles from './index.scss'
import SearchPage from '../../router/SearchPage'
import HomePage from '../../router/HomePage'
import NewWalletPage from '../../router/NewWalletPage'
import { Route } from 'dva/router'
import Side from './Side'

const NeoFrame = (props) => {
  return (
    <div className={styles.root}>
      <div className={styles.appFrame}>
        <AppBar className={styles.appBar} position='absolute'>
          <Toolbar>
            <Typography variant='title' color='inherit' noWrap>
              Neo Wallet
            </Typography>
            <div className={styles.grow} />
            <NeoSearch />
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          classes={{
            paper: styles.drawerPaper
          }}
          anchor='left'
        >
          <div className={styles.toolbar} />
          <Toolbar className={styles.appBar}>
            <Typography variant='title' color='inherit' noWrap >
              Neo Wallet
            </Typography>
          </Toolbar>
          <Divider />
          <Side />
        </Drawer>
        <main className={styles.content}>
          <Route path='/search/:address' exact component={SearchPage} />
          <Route path='/home' exact component={HomePage} />
          <Route path='/new-wallet' exact component={NewWalletPage} />
        </main>
      </div>
    </div>
  )
}
NeoFrame.propTypes = {
  // a: PropTypes.object
}

export default NeoFrame
