import React from 'react'
import PropTypes from 'prop-types'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { Link } from 'dva/router'
import styles from './index.scss'
const index = (props) => {
  const { onClose, isOpen, detail } = props
  return (
    <Dialog onClose={onClose} open={isOpen}>
      {
        isOpen &&
        <DialogContent>
          <Grid container justify='center' spacing={20}>
            <Grid item>
              <Paper className={styles.paper}>
                <Typography color='secondary'>
                  转出
                </Typography>
                {
                  detail.vin.map(item => {
                    return <div key={item.txid}>
                      <Link className={styles.link} to={'/search/' + item.utxo.address}>
                        {item.utxo.address}
                      </Link>
                      <Typography>
                        {item.utxo.value} {item.utxo.name}
                      </Typography>
                    </div>
                  })
                }
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={styles.paper}>
                <Typography color='primary'>
                  转入
                </Typography>
                {
                  detail.vout.map(item => {
                    return <div key={item.txid}>
                      <Link className={styles.link} to={'/search/' + item.address}>
                        {item.address}
                      </Link>
                      <Typography>
                        {item.value} {item.name}
                      </Typography>
                    </div>
                  })
                }
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      }
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          关闭
        </Button>
      </DialogActions>
    </Dialog>
  )
}
index.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}
export default index
