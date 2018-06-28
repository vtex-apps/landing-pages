import React, { Component } from 'react'
import Button from '@vtex/styleguide/lib/Button'
import Typing from 'react-typing-animation'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      finished: false,
    }
  }

  finishedHandler = () => {
    this.setState({finished:true})
  }
  render() {
    const {finished} = this.state
    return (
      <div class="h-100 bg-serious-black ">
        <div class="cf ph2-ns pa9">
          <div class="mt5 center mw5 mw7-ns pa8 mb6 white">
            <h1 class="fw1">
              VTEX IO
            </h1>
            <div class="pv3 mb4 fw1">


              <Typing speed={70} onFinishedTyping={this.finishedHandler}	>
                A new way to build software directly in the cloud,<br/><br/>
                <span>blurring the lines between </span>
              </Typing>

              {finished
              ? (
                <Typing speed={70} loop={true}>
                <Typing.Delay ms={1000} />
                <span>coding</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={6} />
                <span>testing</span>
                <Typing.Delay ms={1000} />
                <Typing.Backspace count={7} />
                <span>deploying</span>
              </Typing>
              ) : null
            }

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
          {/* <div class="fl w-40-ns pa5 ">
            <div class="outline bg-white pa4 h-80-ns"></div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Header
