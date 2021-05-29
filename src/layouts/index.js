import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Extra, Projects, Resume, Frame, Footer } from './components'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Kyle Parry'
      meta={[
        { property: 'og:title', content: 'Kyle Parry'},
        { property: 'og:description', content: 'Check out my portfolio' },
        { property: 'og:image', content: '[./preview.png]' },
        { property: 'og:url', content:'https://boring-franklin-f4b385.netlify.app/' }
      ]}
    />
    <Header />
    <About />
    <Extra />
    <Projects />
    <Resume />
    <Frame />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
