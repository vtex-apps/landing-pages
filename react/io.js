import React, { Component, Fragment } from 'react'
import { Helmet } from 'render'

import Header from './components/Header'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Features from './components/Features'
import Tools from './components/Tools'
import Learn from './components/Learn'
import favicon from './images/favicon.png'

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>VTEX IO - The Serverless Development Environment for Enterprises</title>
          <meta name="description" content="VTEX IO is a serverless development platform for ecommerce with a high level of componetization,
           allowing versioning and hot module replacement. VTEX IO is a service that envelops all the deployment architecture complexity
           so you can focus only on writing code." />
          <meta name="theme-color" content="#F71963" />
          <link rel="icon" href={favicon} />
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
