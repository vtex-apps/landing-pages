import React, { Component } from 'react'
import Header from './Header'
import Welcome from './Welcome'
import QuickStart from './QuickStart'
import Footer from './Footer'
import Technology from './Technology'
class Landing extends Component {
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <article className="w-100 h-100 bg-serious-black near-white flex-column items-center justify-center">
          <div className="justify-center items-center flex flex-column">
            <Header/>
          </div>
        </article>
        <Welcome/>
        <Technology/>
        <QuickStart/>
        <Footer/>
      </div>
    )
  }
}

export default Landing
