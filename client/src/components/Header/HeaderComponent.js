import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import cn from 'classnames'

import SubHeaderContainer from '@src/components/SubHeader/SubHeaderContainer'
import Button from '@src/partials/Button/Button'
import styles from './styles.module.scss'
import logo from './images/logo.png'

export default class Header extends Component {
  render() {
    const { userName, isAuthenticated, logout } = this.props
    const { pathname } = this.props.location
    const component = (
      <div className={styles.header}>
        <div className={cn(styles.header__line, styles.background, styles.background_black)}>
          <div className={styles.box_logo}>
            <img src={logo} className={styles.box_logo__img}/>
            <div className={styles.box_logo__text}>
              <span>Tea Store </span>
              <span className={styles.box_logo__text__sub}>example</span>
            </div>
          </div>
        </div>
        <div className={cn(styles.header__line, styles.background, styles.background_gray)}>
          <div className={ styles.header__line__item }>
            <div className={styles.menu}>
              <NavLink exact to='/categories'
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >HOME</NavLink>
              <NavLink exact to='/categories/1'
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >TEAWARE</NavLink>
              <NavLink exact to='/categories/2'
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >PU ERH TEA</NavLink>
              <NavLink exact to='/categories/3'
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >BLACK TEA</NavLink>
              <NavLink exact to='/categories/4'
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >GREEN TEA</NavLink>
            </div>
          </div>
          <div className={styles.header__line__item}>
            <div className={styles.hello}>
              <span>hello, </span>
              <span className={styles.hello__user}>{ userName }</span>
            </div>
            <Button onClick={logout} label='logout' styleType='logout' />
          </div>
        </div>
        <SubHeaderContainer />
      </div>
    )
    return isAuthenticated
      ? (['/login', '/registration'].some(path => pathname === path)
        ? <div />
        : component)
      : <div />
  }
}

Header.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
}
