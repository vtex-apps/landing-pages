import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Footer from './Footer'
import Features from './Features'
import Tools from './Tools'
import Learn from './Learn'

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Features />
        <Learn />
        <Tools />
        <Footer />
      </div>
    )
  }
}

export default Landing
