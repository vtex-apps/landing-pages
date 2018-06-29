import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import Footer from './Footer'
// import QuickStart from './QuickStart'
// import Technology from './Technology'
import 'vtex-tachyons'
import Features from './Features'
class Landing extends Component {
  render() {
    return (
      <div>
        <article className="w-100 h-100 bg-serious-black near-white flex-column items-center justify-center">
          <div className="justify-center items-center flex flex-column">
            <Header />
          </div>
        </article>
        <Welcome />
        <Features />
        {/* <Technology/>
        <QuickStart/> */}
        <Footer />
      </div>
    )
  }
}

export default Landing
