import React, { Component } from 'react'
import Typing, { Delay, Backspace } from 'react-typing-animation'
import Cursor from './Cursor'

const buttonClassName = 'pv4 ph6 bw1 ba ttu br2 v-mid relative pointer near-white'
class Header extends Component {
  state = {
    finished1: false,
    finished2: false,
  }

  handleFinished1 = () => this.setState({ finished1: true })
  handleFinished2 = () => this.setState({ finished2: true })

  render() {
    const { finished1, finished2 } = this.state
    return (
      <div className="h-100 bg-serious-black ">
        <div className="cf ph2-ns pa9-ns pa6">
          <div className="mv7 center mw8-ns pa8-ns mb5 white bb b--marine">
            <h1 className="fw1 f2 mv7-ns mv5">
              VTEX IO
            </h1>
            <div className="fw3 f3-ns f4 mb7-ns mb9-s">
              <Typing className="flex flex-start mb3-ns" cursor={<Cursor />} speed={20} onFinishedTyping={this.handleFinished1}>
                A new way to build software directly in the cloud
              </Typing>
              <div className="flex flex-wrap flex-row-ns">
                {finished1 && <Typing className="flex flex-start mr2" cursor={<Cursor />} speed={20} onFinishedTyping={this.handleFinished2}>
                  blurring the lines between
                </Typing>
                }
                {
                  finished2 &&
                    <Typing speed={50} loop className="flex flex-start pl2 bg-marine" cursor={<Cursor />}>
                      coding
                      <Delay ms={1500} />
                      <Backspace count={6} />
                      testing
                      <Delay ms={1500} />
                      <Backspace count={7} />
                      deploying
                      <Delay ms={1500} />
                      <Backspace count={9} />
                    </Typing>
                }
              </div>
            </div>
          </div>
          <div className="mt5 center mw8-ns pa8-ns mb6 white">
            <p className="mt7-ns mt9 mb5 fw4 f3-ns f3 ttu">
            What about starting today?
            </p>
            <p className="fw3 f3-ns f4 mb7-ns mb7 o-75 lh-copy">
            Become part of this huge
            ecosystem and start building!
            </p>
            <div className="mt9-ns mt8 mb8 flex flex-column flex-row-ns">
              <div className="mb5 mr5 mt0-ns">
                <a href="http://www.vtex.com/partner/" target="_blank">
                  <button className={`${buttonClassName} fw5 bg-heavy-rebel-pink b--heavy-rebel-pink hover-b--rebel-pink hover-bg-rebel-pink`}>
                  Become a VTEX Partner
                  </button>
                </a>
              </div>
              <div>
                <a href="http://help.vtex.com/en/tracks/vtex-io-getting-started" target="_blank">
                  <button className={`${buttonClassName} fw4 bg-serious-black b--white hover-b--rebel-pink`}>
                  Getting Started
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
