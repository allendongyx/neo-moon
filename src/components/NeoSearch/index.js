import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'
import { connect } from 'dva'
import { fade } from '@material-ui/core/styles/colorManipulator'
import styles from './index.scss'
import EventListener from 'react-event-listener'
import { routerRedux } from 'dva/router'
class NeoSearch extends React.Component {
  constructor (props) {
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleKeyDown (e) {
    console.log('e: ', e)
    const { props } = this
    console.log('props: ', props)
    if (e.key === 'Enter') {
      props.dispatch(routerRedux.push('/search/' + e.target.value))
    }
  }
  render () {
    return (
      <div className={styles.root}>
        <EventListener target='window' onKeyDown={this.handleKeyDown} />
        <div className={styles.search}>
          <SearchIcon />
        </div>
        <input
          id='search-input'
          ref={node => {
            this.input = node
          }}
          className={styles.input}
        />
      </div>
    )
  }
}
NeoSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
}
function mapDispatchToProps ({ }) {
  return {
  }
}
export default connect(mapDispatchToProps)(NeoSearch)
