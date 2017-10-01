import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import HeaderContainer from '@src/components/Header/HeaderContainer'

export default class MainLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
        <HeaderContainer />
        <div className={styles.page_width}>
          <div className={styles.layout}>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
}
