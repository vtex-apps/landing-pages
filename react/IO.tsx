import React, { Component, Fragment } from 'react'
import { Helmet } from 'render'

import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Learn from './components/Learn'
import Tools from './components/Tools'
import Welcome from './components/Welcome'
import favicon from './images/favicon.png'

class Landing extends Component {
  public render() {
    return (
      <Fragment>
        <Helmet>
          <title>VTEX IO - The Serverless Development Environment for Enterprises</title>
          <meta name="description" content="VTEX IO is a serverless development environment that enables you to build high-quality web apps fast, without dealing with infrastructure and scalability concerns." />
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
