import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Extra, Projects, Resume, Frame, Footer } from './components'

import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <meta property='og:title' content='Kyle Parry' />
    <meta property='og:url' content='https://boring-franklin-f4b385.netlify.app/' />
    <meta property='og:description' content='Kyle Parry Portfolio' />
    <meta name='image' property='og:image' content='./preview.png'/>
    <meta name='author' property='og:author' content='Kyle Parry' />

    {/* <Helmet
      title='Kyle Parry'
      meta={[
        { name: 'description', content: 'Check out my portfolio' },
        { name: 'image',  property: 'og:image', content: './preview.png' },
        { property: 'og:url', content:'https://boring-franklin-f4b385.netlify.app/' }
      ]}
    /> */}

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
