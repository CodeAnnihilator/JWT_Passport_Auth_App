import React, { Component } from 'react'
import { Link } from 'react-router'
import styles from './styles.css'
import cupImg from './images/cup.png'
import githubImg from './images/github.png'

const links = {
  github: 'https://github.com/CodeAnnihilator/tokenBasedAuthApp',
  vk: 'https://vk.com/agroil_92'
}

const appDescription = `
  On this website you can find a bunch of different
  sorts of natural tea with actual prices.
`

const LeftSideDescription = () => {
  return (
    <div className={styles.left_info}>
      <img className={styles.cup} src={cupImg} />
      <div className={styles.title_wrapper}>
        <span className={styles.title}>tea store</span>
        <span className={styles.title_after}>example</span>
      </div>
      <span className={styles.title_description}>{ appDescription }</span>
      <div className={styles.github_wrapper}>
        <img className={styles.github} src={githubImg}/>
        <span>
          <span className={styles.github_description}>Source code for this app:</span><br />
          <a href={links.github} className={styles.github_link}>{ links.github }</a>
        </span>
      </div>
      <span className={styles.copyright_wrapper}>
        <span className={styles.copyright}>2017 created by </span>
        <a href={links.vk} className={styles.author_link}>Nick Pyatibratov</a>
      </span>
    </div>
  )
}

export default LeftSideDescription
