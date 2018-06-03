import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import styles from './index.scss'
const index = (props) => {
  return [
    <Card>
      <Stepper activeStep={0}>
        <Step>
          <StepLabel>输入钱包密码</StepLabel>
        </Step>
        <Step>
          <StepLabel>导出密钥</StepLabel>
        </Step>
        <Step>
          <StepLabel>创建钱包成功</StepLabel>
        </Step>
      </Stepper>
    </Card>,
    <Card className={styles.formCard}>
      <form>
        <TextField
          label='密码'
          InputLabelProps={{
            shrink: true
          }}
          placeholder='请输入健壮的钱包密码'
          helperText='该密码会加密您的私钥。这不会成为生成密钥的种子。您将需要此密码和您的私钥才能解锁您的钱包。'
          fullWidth
          margin='normal'
        />
      </form>
      <div style={{ textAlign: 'right' }}>
        <Button className={styles.createButton} variant='raised' color='secondary'>
          确定
        </Button>
      </div>
    </Card>
  ]
}
index.propTypes = {
  // a: PropTypes.object
}
export default index
