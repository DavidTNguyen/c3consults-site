import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styles'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Header />
    <main id="main">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
