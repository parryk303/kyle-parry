import { Header, About, Extra, Projects, Resume, Frame, Footer } from './components'
import preview from './preview.png'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import React from 'react'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Kyle Parry'
      meta={[
        { property: 'og:description', content: 'Check out my portfolio' },
        {
          property: `og:type`,
          content: `website`,
        },
        { name: 'image', property: 'og:image', content: `https://www.kyleparry.life/${preview}` }
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
