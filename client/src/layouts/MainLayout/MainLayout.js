import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { withRouter } from 'react-router-dom'

import HeaderContainer from '@src/components/Header/HeaderContainer'

class MainLayout extends Component {
  render() {
    const isCertainCategory = /categories\/\d\/?$/.test(this.props.location.pathname)
    return (
      <div className={styles.page_wrapper}>
        <HeaderContainer />
        <div className={styles.page_width} style={{ marginTop: isCertainCategory ? 40 : 0 }}>
          <div className={styles.layout}>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MainLayout)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
