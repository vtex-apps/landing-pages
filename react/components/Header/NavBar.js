import React, { Component } from 'react'
import HeaderLink from './HeaderLink'
import { HEADERLINKS } from './constants'
import { map } from 'ramda'

class NavBar extends Component {
  render() {

    return (
      <ul
        className={`w-100 mv0 pl0 pv0 pv3-m pv0-xl
        flex-ns flex-wrap flex-column flex-row-ns
        dn list items-stretch justify-end
        max-h-999px-ns o-100-ns`}
      >
        {map(h => <HeaderLink {...h} />, HEADERLINKS)}
      </ul>
    )
  }
}

export default NavBar
