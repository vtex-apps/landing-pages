
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="flex justify-between-s flex-wrap bg-serious-black" id="footer">
        <div className="flex flex-wrap-ns flex-justify-center pv7 ph8 f7 f6-s f5-ns">
          <a href="http://www.vtex.com/" rel="noopener" target="_blank" className="mr4-ns mr6 link underline-hover near-white">
            About VTEX
          </a>
          <a href="https://careers.vtex.com/" rel="noopener" target="_blank" className="link underline-hover near-white">
            Careers
          </a>
        </div>
        <div className="pv7 ph8 f7 f6-s f5-ns silver">
          VTEX IO 2018 - All rights reserved
        </div>
      </footer>
    )
  }
}

export default Footer
