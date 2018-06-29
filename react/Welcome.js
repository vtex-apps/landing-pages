import React, { Component } from 'react'
import Typing, { Delay, Backspace } from 'react-typing-animation'
import Cursor from './Cursor'

class Header extends Component {
  state = {
    finished: false,
  }

  handleFinished = () => this.setState({ finished: true })

  render() {
    const { finished } = this.state
    return (
      <div className="h-100 bg-serious-black ">
        <div className="cf ph2-ns pa9">
          <div className="mt5 center mw5 mw8-ns pa8 mb5 white bb b--white-30">
            <h1 className="fw1 f1">
              VTEX IO
            </h1>
            <div className="pv3 mb4 fw3 f3 h5">

              <Typing className="di" cursor={<Cursor />} speed={20} startDelay={50} onFinishedTyping={this.handleFinished}>
                <div className="mb3">A new way to build software directly in the cloud</div>
                <span>blurring the lines between </span>
              </Typing>

              {
                finished &&
                  <Typing speed={50} loop className="di" cursor={<Cursor />}>
                    <span>coding</span>
                    <Delay ms={1500} />
                    <Backspace count={6} />
                    <span>testing</span>
                    <Delay ms={1500} />
                    <Backspace count={7} />
                    <span>deploying</span>
                    <Delay ms={1500} />
                    <Backspace count={9} />
                  </Typing>
              }

            </div>
          </div>
          <div className="mt5 center mw5 mw8-ns pa8 mb6 white">
            <p className="mt8 mb4 pv3 fw1 f2">
            What about starting today?
            </p>
            <p className="mt8 mb4 pv3 fw3 f3">
            Become part of this huge
            ecosystem and start building!
            </p>
            <div className="mt9 mb8 content-center flex justify-between mw6">
              <div className="mh3"><a href="http://www.vtex.com/partner/" target="_blank"><button className="pv4 ph6 bw1 ba fw5 ttu br2 fw4 v-mid relative bg-heavy-rebel-pink b--heavy-rebel-pink white hover-b--rebel-pink hover-bg-rebel-pink pointer">Become a VTEX Partner</button></a></div>
              <div className="mh3"><a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank"><button className="pv4 ph6 bw1 ba fw4 ttu br2 fw4 v-mid relative bg-serious-black b--white white hover-b--rebel-pink pointer">Getting Started</button></a></div>
            </div>
          </div>
          {/* <div className="fl w-40-ns pa5 ">
            <div className="outline bg-white pa4 h-80-ns"></div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Header
