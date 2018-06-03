import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from './index.scss'
const index = (props) => {
  return (
    <Card>
      <CardContent>
        <h3>钱包</h3>
        <Button component='a' href='/new-wallet' className={styles.createButton} variant='raised' color='secondary'>
          创建钱包
        </Button>
        <Button className={styles.openButton} color='secondary'>
          打开钱包
        </Button>
        <p>
          打开或创建您的钱包
        </p>
      </CardContent>
    </Card>
  )
}
index.propTypes = {
  // a: PropTypes.object
}
export default index
