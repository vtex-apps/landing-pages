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
          <meta name="description" content="VTEX IO is a serverless development platform for ecommerce with a high level of componetization,
           allowing versioning and hot module replacement. VTEX IO is a service that envelops all the deployment architecture complexity
           so you can focus only on writing code." />
          <meta name="theme-color" content="#F71963" />

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
