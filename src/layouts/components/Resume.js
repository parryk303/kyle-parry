import React from 'react'
import Link from 'gatsby-link'

import styles from './Resume.module.css'
import Container from './'

import {
  cu,
  hr,
  rl,
  unc,
  hps,
  mt,
  shop,
  school,
  keystone,
  KeystoneLodgeSpa,
  browserImg,
  diplomaImg,
} from '../images/resume'

import { chevronWhite } from '../images'

import { resume } from '../../kparryResume.pdf'

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

const ResumeItem = props => {
  return (
    <div className={`${styles.cdTimelineBlock} jsCdBlock`}>
      <div
        className={`${styles.cdTimelineImg} ${
          styles.cdTimelineImgPicture
        } jsCdImg`}
      >
        <img src={props.timelineIcon} alt="Picture" />
      </div>

      <div className={`${styles.cdTimelineContent} jsCdContent`}>
        <div className={styles.wrapCollabsible}>
          <input id={props.id} className={styles.toggle} type="checkbox" />

          <label htmlFor={props.id} className={styles.lblToggle}>
            <div className={styles.jobTopContainer}>
              <h4>{props.jobTitle}</h4>
              <img src={props.logo} />
            </div>

            <h5>{props.department}</h5>
            <h5>{props.group}</h5>
          </label>

          <div className={styles.collapsibleContent}>
            <div className={styles.contentInner}>
              <ul>
                {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
              </ul>
            </div>
          </div>

          <span className={styles.cdTimelineDate}>{props.dates}</span>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="resume" className={styles.resumeSection}>
    <div className={styles.resumeBar}>
      <h1>Experience</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronWhite} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCdTimeline`}>
      <div className={styles.tapForDetails}>
        <span>tap card for details</span>
      </div>
      <div className={styles.cdTimelineContainer}>

        <ResumeItem
          id="FullstackTF"
          companyName="Hack Reactor"
          jobTitle="Software Engineering Student"
          department="Boulder Campus"
          group="Software Engineering Immersive"
          dates="Oct 2020 - Feb 2021"
          descriptions={[
            'Mentored 35 students on development concepts, algorithms, debugging strategies, software architecture and clean code structure',
            'Conducted technical interviews for applicants',
            'Led interactive reviews for students to solidify material ',
            'Directed team building exercises to strengthen class cohesion and community',
          ]}
          siteUrl="https://www.fullstackacademy.com/"
          logo={hr}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="MizuhoRM"
          companyName="Vail Resorts"
          jobTitle="Ski Instructor"
          department="Keystone"
          dates="Nov 2010 - Apil 2021"
          descriptions={[
            'Customized private lessons for families around the world, Trained incoming new-hire instructors',
            'Ranked #1 in instructor priority list for Keystone Resort, drove company value for product offered',
            'Continued development throughout career attaining certifications from Professional Ski Instructors of America: Alpine Level 2, Snowboard Level 1, Freestyle Specialist Level 1, Children’s Specialist 2'
          ]}
          siteUrl="https://map-it-fsa.firebaseapp.com/"
          logo={keystone}
          timelineIcon={mt}
        />

        <ResumeItem
          id="MizuhoPMDS"
          companyName="Eagle County School District"
          jobTitle="Teacher"
          department="Homestake Peak School"
          dates="June 2018 - August 2019"
          descriptions={[
            'Awarded Connect 2 Learn grant to purchase a set of chromebooks and integrate tech into the classroom',
            'Examined student STAR assessment data scores to assist in planning Math and Literacy interventions',
            'Planed lessons using Bridges and Benchmark curricula for Math and Literacy',
            'Provided differentiated support for ELL students and students with IEPs in all content areas',
          ]}
          siteUrl="https://saucesome-fsa.herokuapp.com/"
          logo={hps}
          timelineIcon={school}
        />

        <ResumeItem
          id="UNC"
          companyName=""
          jobTitle="Master of Teaching"
          department="University of Northern Colorado"
          dates="May 2017 - June 2018"
          descriptions={[
            'Immersive Masters of Teaching program',
            'Student teaching at Silverthorne Elementary',
          ]}
          siteUrl="https://symbalplayer.firebaseapp.com/"
          logo={unc}
          timelineIcon={diplomaImg}
        />

        <ResumeItem
          id="kls"
          companyName="Vail Resorts"
          jobTitle="Front Desk Agent"
          department="Keystone Lodge and Spa"
          dates="May 2016 - June 2018"
          descriptions={[
            'Checked in geusts',
            'Lead training in use of Vail Resorts internal reservation management systems for new-hire front desk agents',
          ]}
          siteUrl="https://symbalplayer.firebaseapp.com/"
          logo={KeystoneLodgeSpa}
          timelineIcon={mt}
        />

        <ResumeItem
          id="RL"
          companyName="Ralph Lauren"
          jobTitle="Sales Assosiate"
          department="Silverthorne"
          group="Store 227"
          dates="Nov 2010 - May 2016"
          descriptions={[
            'Sold clothing',
          ]}
          logo={rl}
          timelineIcon={shop}
        />

        <ResumeItem
          id="CU"
          companyName="New York University"
          jobTitle="Bachelor of Arts"
          department="History and Japanese"
          dates="August 2006 - May 2010"
          descriptions={['ISV Equador, Australia, Croatia']}
          logo={cu}
          timelineIcon={diplomaImg}
        />
      </div>
    </section>
  </div>
)
