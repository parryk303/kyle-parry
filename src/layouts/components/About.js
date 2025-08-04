import styles from './About.module.css'
import { kyle } from '../images'
import React from 'react'

const About = () => (
  <div className={styles.about}>

    <div className={styles.aboutMeContainer}>

      <div className={styles.aboutPhoto}>
        <img src={kyle} alt="" />
      </div>

      {/* <div className={styles.aboutText}>
  
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

      </div> */}

<div className={styles.aboutText}>
  <h2>I'm Kyle Parry, a full-stack engineer and former educator.</h2>

  <h4>
    I lead and build scalable software solutions that solve real-world problems. In my current role at RingCentral, I serve as both a Solutions Developer and Development Lead, delivering internal and customer-facing applications at scale.
  </h4>

  <ul>
    <li>
    Led the development of an Android application rolled out to Waste Management, Inc.’s entire North American fleet, standardizing mobile operations across the U.S. and Canada.
    </li>
    <li>
      Delivered multiple CRM integrations to support RingCentral’s call center operations across enterprise clients.
    </li>
    <li>
      Designed and implemented a cloud relay provisioning platform that reduced deployment time from over four weeks to under ten minutes.
    </li>
    <li>
      Managed and mentored a remote team of third-party developers in India as Development Lead on several projects.
    </li>
  </ul>

  <h4>
    Before entering tech in 2020, I worked as a ski instructor and elementary teacher—roles that sharpened my communication, adaptability, and mentoring skills. I now bring those strengths to engineering teams, blending hands-on development with collaborative leadership.
  </h4>

  <div className={styles.techStack}>
    <div>
      <h3>Front-End</h3>
      <h4>TypeScript • React • Redux • Material-UI • Bootstrap • Gatsby • Next.js</h4>
    </div>
    <div>
      <h3>Back-End</h3>
      <h4>Python • Node • Java • MySQL • PostgreSQL • GraphQL • MongoDB • AWS • Spring Boot</h4>
    </div>
  </div>
</div>


    </div>

  </div>
)

export default About
