import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './style.css'
import cupImg from './images/cup.png'
import githubImg from './images/github.png'

export default class AuthLayout extends Component {
  render() {
    return (
      <div className={styles.page_wrapper}>
        <div className={styles.card_wrapper}>
          <div className={styles.left_info}>
            <img className={styles.cup} src={cupImg} />
            <div className={styles.title_wrapper}>
              <span className={styles.title}>tea store</span>
              <span className={styles.title_after}>example</span>
            </div>
            <span className={styles.title_description}>
              On this website you can find a bunch of different
              sorts of natural tea with actual prices.
            </span>
            <div className={styles.github_wrapper}>
              <img className={styles.github} src={githubImg}/>
              <span>
                <span className={styles.github_description}>Source code for this app:</span><br />
                <a
                  href={'https://github.com/CodeAnnihilator/tokenBasedAuthApp'}
                  className={styles.github_link}
                >{ 'https://github.com/CodeAnnihilator/tokenBasedAuthApp' }</a>
              </span>
            </div>
            <span className={styles.copyright_wrapper}>
              <span className={styles.copyright}>2017 created by </span>
              <a href={'https://vk.com/agroil_92'} className={styles.author_link}>Nick Pyatibratov</a>
            </span>
          </div>
          <div className={styles.form_wrapper}>
            <div className={styles.tabs}>
              <Link to='/login' activeClassName={styles.tab_active} className={styles.tab}>sign in</Link>
              <Link to='/registration' activeClassName={styles.tab_active} className={styles.tab}>sign up</Link>
            </div>
            <div className={styles.form_container}>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
