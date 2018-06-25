import React, { Component } from 'react'
import Button from '@vtex/styleguide/lib/Button'
import { Link } from 'render'

import NavBar from './NavBar'

class QuickStart extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div class="mw8 center ph3-ns mt9 bg-serious-black ">
        <div class="cf ph2-ns outline pa5 ">
          <div class="fl w-60-ns pa5">
            <div class="outline bg-white pa5 ">
              <h1 >
                Quick Start
              </h1>
              <div class="pv3 mb3">
                Already a VTEX Partner and don't know how to start?
              </div>
              <p class="mb4">
              Let's build something great!
              </p>
              <div className="mt5 content-center flex justify-between">
                <div class=""><a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank"><Button variation="secondary">Getting Started</Button></a></div>
              </div>

            </div>
          </div>
          {/* <div class="fl w-40-ns pa5 ">
            <div class="outline bg-white pa4 h-80-ns"></div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default QuickStart
