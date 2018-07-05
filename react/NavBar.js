import React, { Component } from 'react'
import HeaderLink from './HeaderLink'

class NavBar extends Component {
  render() {
    return (
      <ul
        className="w-100 mv0 pl0 list dn flex-ns flex-wrap flex-column items-stretch justify-end flex-row-ns max-h-999px-ns o-100-ns pv0 pv3-m pv0-xl"
      >
        <HeaderLink
          id={'1'}
          url={'http://help.vtex.com/en/tracks/vtex-io-getting-started'}
        >
          <span>Getting Started</span>
        </HeaderLink>
        {/* <HeaderLink
          id={'2'}
          url={'http://help.vtex.com/en/tracks'}
        >
          <span>Guides</span>
        </HeaderLink> */}
        <HeaderLink
          id={'3'}
          url={'http://help.vtex.com/en/topic/vtex-io'}
        >
          <span>Docs</span>
        </HeaderLink>
        <HeaderLink
          id={'4'}
          url={'https://community.vtex.com/s/topic/0TO0L000003ZvZJWA0/developers?language=en_US&t=1526571970937'}
        >
          <span>Community</span>
        </HeaderLink>
        <HeaderLink
          id={'5'}
          url={'https://apps.vtex.com/'}
        >
          <span>App Store</span>
        </HeaderLink>
        <HeaderLink
          id={'6'}
          url={'http://www.vtex.com/partner/'}
        >
          <span>VTEX Partner</span>
        </HeaderLink>
      </ul>
    )
  }
}

export default NavBar
