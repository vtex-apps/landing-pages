import { map } from 'ramda'
import React, { Component } from 'react'
import FooterLink from './FooterLink'
import { FOOTER_LINKS } from './constants'


class Footer extends Component {
  render() {
    return (
      <footer className="flex justify-between-s flex-wrap bg-serious-black" id="footer">
        <div className="flex flex-wrap-ns flex-justify-center pv7 ph8 f7 f6-s f5-ns">
          { map(f => <FooterLink {...f} />, FOOTER_LINKS) }
        </div>
        <div className="pv7 ph8 f7 f6-s f5-ns silver">
          VTEX IO 2018 - All rights reserved
        </div>
      </footer>
    )
  }
}

export default Footer
