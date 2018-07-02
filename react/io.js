import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Footer from './Footer'
import Features from './Features'
import Tools from './Tools'

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Welcome />
        <Features />
        <Tools />
        <Footer />
      </div>
    )
  }
}

export default Landing
