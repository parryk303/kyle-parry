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
  
        <h2>I'm Kyle Parry, am educator turned full-stack engineer.</h2>
        <h4>
          I'm Kyle Parry—a former ski instructor and elementary school teacher who traded the slopes and classrooms for lines of code and algorithmic challenges. In the midst of the global pandemic in July 2020, I seized the opportunity to redefine my path and fully immerse myself in the dynamic world of full-stack engineering.
        </h4>
        <h4>
          Fueled by an unwavering passion for innovation, I ventured beyond the familiar, leaving behind the security of my previous roles to embrace the excitement of uncertainty. This marked the beginning of a relentless pursuit to master the intricacies of programming and cultivate a deeper understanding of technology's transformative power.
        </h4>
        <h4>
          Committed to a perpetual cycle of growth, I approach each day as an opportunity to refine my skills and evolve as an engineer. I thrive on challenges, actively seeking new avenues to expand my knowledge and skill set. Every twist and turn in my tech journey has been a source of fulfillment, and I eagerly anticipate the connections and opportunities that await on this thrilling expedition.
        </h4>

        <div className={styles.techStack}>
          <div>
            <h3>Front-End</h3>
            <h4>JavaScript • React • Redux • HTML5 • CSS3 • Material-UI • Bootstrap • Gatsby • Next.js</h4>
          </div>
          <div>
            <h3>Back-End</h3>
            <h4>Python • Node • Java • MySQL • PostgreSQL • GraphQL • MongoDB • AWS • Spring Boot </h4>
          </div>
        </div>

      </div>

    </div>

  </div>
)

export default About
