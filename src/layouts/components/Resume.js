import React from 'react'
import Link from 'gatsby-link'

import styles from './Resume.module.css'
import Container from './'

import {
  cu,
  hr,
  rl,
  tl,
  unc,
  hps,
  mt,
  shop,
  school,
  keystone,
  KeystoneLodgeSpa,
  browserImg,
  diplomaImg,
  hrCert,
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
                <img src={props.certs} />
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
          id="hr"
          jobTitle="Galvanize Hack Reactor"
          department="Software Engineering Student"
          dates="Oct 2020 - Feb 2021"
          descriptions={[]}
          logo={hr}
          certs={hrCert}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="ksrs"
          companyName="Vail Resorts"
          jobTitle="Ski Instructor"
          department="Keystone"
          dates="Nov 2010 - Apil 2021"
          descriptions={[
            'Ranked #1 in instructor priority list for Keystone Resort driving company value',
            'Customized private lessons for families around the world',
            'Trainer and mentor for new hire instructors',
            'Led monthly meetings focused on safety, guest satisfaction and class progressions',
            'Led clinics focused on freestyle progressions and child centered instruction',
            'Certified by the Professional Ski Instructors of America: Alpine Level 2, Snowboard Level 1, Freestyle Specialist Level 1, Children’s Specialist 2',
          ]}
          logo={keystone}
          timelineIcon={mt}
        />

        <ResumeItem
          id="hps"
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
          logo={hps}
          timelineIcon={school}
        />

        <ResumeItem
          id="unc"
          jobTitle="University of Northern Colorado"
          department="Master of Arts in Teaching"
          dates="May 2017 - June 2018"
          descriptions={[]}
          logo={unc}
          certs={tl}
          timelineIcon={diplomaImg}
        />

        <ResumeItem
          id="kls"
          companyName="Vail Resorts"
          jobTitle="Front Desk Agent"
          department="Keystone Lodge and Spa"
          dates="May 2016 - June 2018"
          descriptions={[
            'Lead training in use of Vail Resorts internal lodging management systems for new-hire front desk agents',
            'Responsible for maintaining high quality AAA four diamond check in/check out procedures',
            'Coordinated guests needs with other company and resort departments',
            'Fielded tax-exemption related questions, restaurant and activity recomendations and all manner of resort queries all while maintaining a professional and friendly demeanor',
            'Completed Vail Resorts Leadership Essentials course',
          ]}
          logo={KeystoneLodgeSpa}
          timelineIcon={mt}
        />

        <ResumeItem
          id="rl"
          companyName="Ralph Lauren"
          jobTitle="Sales Assosiate"
          department="Silverthorne Store 227"
          dates="Nov 2010 - May 2016"
          descriptions={[
            'Utilized retail and customer service experience while expanding leadership experience',
            'Responsible for assisting the manager by leading other associates on the floor and closing or opening registers',
            'Worked with an international clientele of tourists traveling from all over the world',
            'Many of our customers traveled from Mexico, Brazil, Australia and Japan to ski in Colorado',
          ]}
          logo={rl}
          timelineIcon={shop}
        />

        <ResumeItem
          id="cu"
          jobTitle="University of Colorado at Boulder"
          department="Bachelor of Arts in History and Japanese"
          dates="August 2006 - May 2010"
          descriptions={[
            'Volunteered with the International Student Volunteers in Ecuador, Australia and Croatia',
            'Croatia: Fostered peaceful relations between Serbians and Croatians via community development in war torn communities. Led camp activities with children: soccer, baseball, basketball, movie nights',
            'Australia: Educated a coal mining community about ecological issues via trail construction and tree planting. Volunteered at Carnarvon National Park building trails and constructing river crossings',
            'Ecuador: Taught English to local children ages 6 to 13. Maintained biological reserve in the Amazon rainforest, planting trees, patrolling for poachers',
          ]}
          logo={cu}
          timelineIcon={diplomaImg}
        />
      </div>
    </section>
  </div>
)
