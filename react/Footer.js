
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="ph5 pt9 pb7 bg-blue-silver" id="iframe-footer">
        <section className="flex flex-column flex-row-xl justify-center justify-between-xl items-center mw8 mt9 center bt silver pt6">
          <nav>
            <a
              href={'http://help.vtex.com/en/topic/vtex-io'}
              rel="noopener"
              target="_blank"
              className="dib-xl ph5 pb5 pb0-xl br-xl bw1 b--silver f5 fw4 tr-xl link underline-hover marine"
            >
            Help
            </a>
            <a
              href={'http://vtex.com/'}
              rel="noopener"
              target="_blank"
              className="dib-xl ph5 pb5 pb0-xl f5 fw4 tr-xl link underline-hover marine"
            >
              VTEX
            </a>
          </nav>
        </section>
      </footer>
    )
  }
}

export default Footer
