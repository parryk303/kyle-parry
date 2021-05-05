import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Extra, Projects, Resume, Frame, Footer } from './components'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title="Kyle Parry"
      meta={[
        { name: 'description', content: 'Check me out' },
        { name: 'keywords', content: 'kyle parry' },
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
