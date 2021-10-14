import React from 'react'
import styles from './About.module.css'

import { kyle } from '../images'
import { concert, realmadrid, plane } from '../images/extra'

const About = () => (
  <div className={styles.about}>

    <div className={styles.aboutMeContainer}>

      <div className={styles.aboutPhoto}>
        <img src={kyle} alt="" />
      </div>

      <div className={styles.aboutText}>
        <h2>I'm Kyle Parry, a teacher turned full-stack engineer.</h2>
        <h4>
          After developing my education skills as a ski instructor and elementary school teacher for several years, the urge to switch careers and dive further into tech grew too strong to ignore.
        </h4>
        <h4>
          In July 2020 in the midst of the global pandemic, I left the security and stability I had always known to focus solely on honing and growing my programming skills.
        </h4>
        <h4>
          I am dedicated to growing stronger as an engineer everyday. I am always looking for new opportunities to hone my skills and learn new ones. I have loved every step of my journey into tech and I’m excited to see who I’ll have the chance to meet next.
        </h4>

        <div className={styles.techStack}>
          <div>
            <h3>Front-End</h3>
            <h4>JavaScript • React • Redux • HTML5 • CSS3 • Bootstrap • Material-UI • Gatsby • Java</h4>
          </div>
          <div>
            <h3>Back-End</h3>
            <h4>Node • Express • Docker • MySQL • PostgreSQL • GraphQL • MongoDB • AWS • Spring Boot </h4>
          </div>
        </div>

      </div>

    </div>

  </div>
)

export default About
