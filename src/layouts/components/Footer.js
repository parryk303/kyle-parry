import React from 'react'
import Link from 'gatsby-link'
import styles from './Footer.module.css'

import { email, linkedin, github } from '../images/footer'

const Footer = () => (
  <div className={styles.imgsContainer}>
    <a href="mailto:kyle.parry.303@gmail.com?subject=HELLO!">
      <img src={email} className={styles.iconImg} />
    </a>
    <a href="https://www.linkedin.com/in/parryk303/" target="_blank">
      <img src={linkedin} className={styles.iconImg} />
    </a>
    <a href="https://github.com/parryk303" target="_blank">
      <img src={github} className={styles.iconImg} />
    </a>
  </div>
)

export default Footer
