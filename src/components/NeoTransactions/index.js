import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import DetailModal from './DetailModal'
import styles from './index.scss'
const NeoTransactions = (props) => {
  const { transaction, onOpenDetailModal, onCloseDetailModal } = props
  const { data, loading, fetchSuccess, isOpenDetail, detail } = transaction
  const { rows } = data
  const DetailModalProps = {
    isOpen: isOpenDetail,
    onClose: () => {
      onCloseDetailModal()
    },
    detail
  }
  return (
    <Paper className={styles.card}>
      {
        loading && <CircularProgress className={styles.progress} size={65} />
      }
      <DetailModal {...DetailModalProps} />
      {
        fetchSuccess && <Table>
          <TableHead>
            <TableRow>
              <TableCell>交易类型</TableCell>
              <TableCell numeric>交易标识</TableCell>
              <TableCell numeric>时间</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(item => {
              return (
                <TableRow key={item._id}>
                  <TableCell component='th' scope='row'>
                    {
                      item.type === 'InvocationTransaction' && 'Invocation'
                    }
                    {
                      item.type === 'ContractTransaction' && 'Contract'
                    }
                    {
                      item.type === 'ClaimTransaction' && 'Claim'
                    }
                  </TableCell>
                  <TableCell numeric>
                    <Typography color='primary'
                      onClick={() => {
                        onOpenDetailModal(item)
                      }}
                      className={styles.txid}>
                      {item.txid}
                    </Typography>
                  </TableCell>
                  <TableCell numeric>{new Date(item.time * 1000).format('yyyy-MM-dd hh:mm:ss')}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      }
    </Paper>
  )
}
NeoTransactions.propTypes = {
  transaction: PropTypes.object.isRequired,
  onOpenDetailModal: PropTypes.func.isRequired,
  onCloseDetailModal: PropTypes.func.isRequired
}
export default NeoTransactions
