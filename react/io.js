import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Welcome from './Welcome'
import Footer from './Footer'
import Features from './Features'
import Tools from './Tools'
import Learn from './Learn'

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>
            VTEX IO - The Serverless Development Environment for Enterprises
          </title>
        </Helmet>
        <Header />
        <Welcome />
        <Features />
        <Learn />
        <Tools />
        <Footer />
      </Fragment>
    )
  }
}

export default Landing
