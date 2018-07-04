import React, { Component } from 'react'
import Images from './images/Images'
const buttonClassName = 'pv4 ph6 bw1 ba ttu br2 fw4 v-mid relative pointer near-white'

class Learn extends Component {
  render() {
    return (
      <div className="h-100 bg-serious-black">
        <div className="dt dt--fixed mw9">
          <div className="mt5 pa8 mb5 dtc w-70 v-mid near-white bg-mid-gray">
            <h1 className="fw1 f2 ttu">
              Learn the basics
            </h1>
            <div className="pv3 mb4 fw3 f3 mb9">
              <p>Already a VTEX Partner and don't</p>
              <p>know how to start developing with IO?</p>
            </div>
            <div className="mh3">
              <a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank">
                <button className={`${buttonClassName} fw5 bg-heavy-rebel-pink b--heavy-rebel-pink hover-b--rebel-pink hover-bg-rebel-pink`}>
                Getting Started
                </button>
              </a>
            </div>
          </div>
          <div className="dtc-ns dn bg-marine v-mid w-30">
            <Images image="img-learn" />
          </div>
        </div>
      </div>
    )
  }
}

export default Learn
