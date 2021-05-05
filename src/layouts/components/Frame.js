import React from 'react'
import Link from 'gatsby-link'
import styles from './Frame.module.css'
import Container from './'

import { turntable } from '../images'

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

const Frame = () => (
  <div className={styles.frame}>
    <h2>Kyle's Tunes</h2>
    <div className={styles.spotifyContainer}>
    <iframe src="https://open.spotify.com/embed/playlist/13RlLJLDScdr84EqB2AkCY" />
    </div>
  </div>
)

export default Frame
