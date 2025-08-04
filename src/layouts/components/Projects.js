import { vt, cr, ct, bofa, nf, jt, jarvis, itsa } from '../images/projects'
import styles from './Projects.module.css'
import { chevronBlack } from '../images'
import React from 'react'
import {
  googlemapsImg,
  postgresqlImg,
  bootstrapImg,
  cassandraImg,
  firebaseImg,
  datastaxImg,
  graphQLImg,
  netlifyImg,
  herokuImg,
  dockerImg,
  jqueryImg,
  springImg,
  reactImg,
  mongoImg,
  mysqlImg,
  nodeImg,
  javaImg,
  awsImg,
  muiImg,
  coreui,
  next,
} from '../images/tech'

let marginY = 0
let destination = 0
let speed = 20
let scroller = null

const toTop = elementId => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY -= speed
  if (marginY <= 0) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

const Project = props => {
  const techImgs = props.techImgs

  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <div className={styles.projectname}>
          <h2>{props.projectname}</h2>
        </div>
        <div>
          <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
      </div>
      <div className={styles.mockupAndLinks}>
        <div className={styles.mockupContainer}>
          <img src={props.mockup} className={styles.mockup} alt="" />
          <div className={styles.mockupOverlay}>
            <div className={styles.techStack}>
              {techImgs
                ? techImgs.map(image => <img src={image} alt="" />)
                : 'Tech stack loading...'}
            </div>
          </div>
        </div>
        <div className={styles.linksContainer}>
          {props.siteUrl && (
            <a href={props.siteUrl} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          )}
          {props.githubUrl && (
            <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="projects" className={styles.projectsSection}>
    <div className={styles.projectsBar}>
      <h1>Projects</h1>
      <a href="#" onClick={() => toTop('top')}>
        <img src={chevronBlack} alt="Chevron" />
      </a>
    </div>
    <div className={styles.projectsContainer}>
      <Project
        projectname="Insider Threat Security Assessment"
        mockup={itsa}
        excerpt="Assessment Tool created for collecting data and onboarding new clients into the Securonix Insider Threat Program"
        siteUrl={null}
        techImgs={[reactImg, next, muiImg, mongoImg, awsImg]}
        githubUrl={null}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Jarvis"
        mockup={jarvis}
        excerpt="An enterprise cybersecurity product built for Securonix"
        siteUrl="https://jarvis-cyberfusion.securonix.net/"
        techImgs={[reactImg, coreui, next, muiImg, nodeImg, postgresqlImg, awsImg]}
        githubUrl={null}
      />
      <hr className={styles.projectHR} />
    
      <Project
        projectname="Victorian Twitter"
        mockup={vt}
        excerpt="A Twitter jQuery emulation with a Victorian Era theme"
        siteUrl="https://victorian-twitter-io9p07lpp-parryk303.vercel.app/"
        githubUrl="https://github.com/parryk303/Victorian-Twitter"
        techImgs={[jqueryImg, herokuImg]}
      />
      <hr className={styles.projectHR} />
    </div>
  </div>
)
