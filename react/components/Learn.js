import React, { Component } from 'react'
import Images from '../images/Images'
const buttonClassName = 'pv4 ph6 bw1 ba ttu br2 fw4 v-mid relative pointer near-white'

class Learn extends Component {
  render() {
    return (
      <div className="flex justify-center-m w-100 h-100 bg-serious-black">
        <div className="flex mw9">
          <div className="pv9 ph9-l w-100 v-mid near-white">
            <h1 className="fw1 f2 ttu pl0-l pl9-m pl8">
              Learn the basics
            </h1>
            <div className="pv3 fw3 f3-ns mb9-ns mb4 pl0-l pl9-m pl8">
              <p>Already a VTEX Partner and don't</p>
              <p>know how to start developing with IO?</p>
            </div>
            <div className="mh3 pl0-l pl9-m pl8">
              <a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank">
                <button className={`${buttonClassName} fw5 bg-heavy-rebel-pink b--heavy-rebel-pink hover-b--rebel-pink hover-bg-rebel-pink`}>
                Getting Started
                </button>
              </a>
            </div>
          </div>
          <div className="flex-m dn justify-end v-mid w-100">
            <Images image="img-learn" />
          </div>
        </div>
      </div>
    )
  }
}

export default Learn
