import React from 'react'
import PropTypes from 'prop-types'
import NeoFrame from '../../components/NeoFrame'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

class index extends React.Component {
  render () {
    const theme = createMuiTheme({
      palette: {
        primary: blue
      }
    })
    return (
      <MuiThemeProvider theme={theme}>
        <NeoFrame />
      </MuiThemeProvider>
    )
  }
}
index.propTypes = {
  // a: PropTypes.object
}
export default index
