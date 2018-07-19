import React, { Component } from 'react'
import Images from '../images/Images'
const buttonClassName = 'pv4 ph6 bw1 ba ttu br2 fw4 v-mid relative pointer near-white'

class Learn extends Component {
  render() {
    return (
      <div className="flex justify-center-m w-100 h-100 bg-serious-black">
        <div className="flex-ns mw9">
          <div className="ph6 pv9 ph9-l w-100 v-mid near-white">
            <h1 className="pl0-l pl9-m mt9-ns mv0 mb5 fw4 f3 ttu">
              Learn the basics
            </h1>
            <p className="lh-copy fw3 f3-ns mb7 mb9-ns w-80 w-auto-ns">
            Already a VTEX Partner and don't know how to start developing with IO?
            </p>
            <div className="pl0-l pl9-m">
              <a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank">
                <button className={`${buttonClassName} fw5 bg-heavy-rebel-pink b--heavy-rebel-pink hover-b--rebel-pink hover-bg-rebel-pink`}>
                Getting Started
                </button>
              </a>
            </div>
          </div>
          <div className="flex-m justify-end v-mid w-100 mw-none-s">
            <Images image="img-learn" />
          </div>
        </div>
      </div>
    )
  }
}

export default Learn