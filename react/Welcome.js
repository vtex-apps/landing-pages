import React, { Component } from 'react'
import Button from '@vtex/styleguide/lib/Button'

class Header extends Component {
  constructor(props) {
    super(props)
  }


  render() {

    return (
      <div class="mw8 center ph3-ns mt9 bg-serious-black ">
        <div class="cf ph2-ns outline pa9 ">
          <div class="fl w-60-ns pa5">
            <div class="outline bg-white pa8 mb6">
              <h1 >
                VTEX IO
              </h1>
              <div class="pv3 mb4">
                A new way to build we software directly in the cloud, blurring the lines between coding,
              testing and deploying
              </div>
              <p class="mt8 mb4">
              What about starting today? Become part of this huge
              ecosystem and start building!
              </p>
              <div className="mt9 mb8 content-center flex justify-between">
                <div class="mh3"><a href="http://www.vtex.com/partner/" target="_blank"><Button variation="secondary">Become a VTEX Partner</Button></a></div>
                <div class="mh3"><a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank"><Button variation="secondary">Getting Started</Button></a></div>
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

export default Header
