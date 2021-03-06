import React from 'react'
import Link from 'gatsby-link'
import styles from './Projects.module.css'
import Container from './'

import { vt, cr, ct, bofa, nf, jt } from '../images/projects'

import { chevronBlack } from '../images'

import {
  reactImg,
  bootstrapImg,
  firebaseImg,
  googlemapsImg,
  herokuImg,
  nodeImg,
  postgresqlImg,
  mongoImg,
  awsImg,
  dockerImg,
  jqueryImg,
  graphQLImg,
  cassandraImg,
  datastaxImg,
  netlifyImg,
  muiImg,
  javaImg,
  springImg,
  mysqlImg,
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
          <a href={props.siteUrl} target="_blank">
            Visit
          </a>
          <a href={props.githubUrl} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="projects" className={styles.projectsSection}>
    <div className={styles.projectsBar}>
      <h1>Projects</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <div className={styles.projectsContainer}>
      <Project
        projectname="Java Todo"
        mockup={jt}
        excerpt="A todo app built with a java Spring Boot restful API and a Material-UI React frontend"
        siteUrl="http://3.145.1.248:8080/#/"
        githubUrl="https://github.com/parryk303/Todo"
        techImgs={[reactImg, muiImg, nodeImg, javaImg, mysqlImg, springImg,awsImg ]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Breath of Fresh AirBNB"
        mockup={bofa}
        excerpt="AirBNB UX emulation deployed to AWS"
        siteUrl="http://3.20.235.237:4000/"
        githubUrl="https://github.com/parryk303/Breath-of-Fresh-AirBNB"
        techImgs={[reactImg, nodeImg, mongoImg, bootstrapImg, awsImg, dockerImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Notflix"
        mockup={nf}
        excerpt="A Netflix clone built using a GraphQL API via Datastax AstraDB"
        siteUrl="https://optimistic-lumiere-93306f.netlify.app/"
        githubUrl="https://github.com/parryk303/netflix-clone"
        techImgs={[reactImg, nodeImg, graphQLImg, cassandraImg, datastaxImg, netlifyImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Crypto Tracker"
        mockup={ct}
        excerpt="An auto updating Bitcoin price tracker"
        siteUrl="https://crypto-tracker-tool.herokuapp.com/"
        githubUrl="https://github.com/parryk303/Crypto-Tracker-Tool"
        techImgs={[reactImg, nodeImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Victorian Twitter"
        mockup={vt}
        excerpt="A Twitter jQuery emulation with a Victorian Era theme"
        siteUrl="https://victorian-twitter.herokuapp.com/"
        githubUrl="https://github.com/parryk303/Victorian-Twitter"
        techImgs={[jqueryImg, herokuImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Coffee Roulette"
        mockup={cr}
        excerpt="A promotional coffee randomizer app"
        siteUrl="https://coffee-roulette-kp.herokuapp.com/"
        githubUrl="https://github.com/parryk303/Coffee-Roulette"
        techImgs={[reactImg, nodeImg, postgresqlImg, bootstrapImg, herokuImg]}
      />
    </div>
  </div>
)

