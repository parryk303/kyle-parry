import { fishing, skiing, plane, fathering } from '../images/extra'
import styles from './Extra.module.css'
import React from 'react'

const Extra = () => (
  <div className={styles.aboutExtra}>
    <h2>When I'm not coding, you can find me...</h2>

    <div className={styles.extrasContainer}>
      <div className={styles.extra}>
        <img src={skiing} />
        <p>Skiing</p>
      </div>

      <div className={styles.extra}>
        <img src={plane} />
        <p>Visiting friends</p>

      </div><div className={styles.extra}>
        <img src={fishing} />
        <p>Fishing</p>
      </div>

      <div className={styles.extra}>
        <img src={fathering} />
        <p>Fathering</p>
      </div>
    </div>
  </div>
)

export default Extra
