import PropTypes from 'prop-types'
import React, { Component } from 'react'
import HeaderLink from './HeaderLink'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul
        className={`w-100 mv0 pl0 list flex flex-wrap flex-column items-stretch justify-end flex-row-ns max-h-999px-ns o-100-ns pv0 pv3-m pv0-xl`}
      >
        <HeaderLink
          id={1}
          url={'http://help.vtex.com/en/tracks/vtex-io-getting-started'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
        Getting Started
        </HeaderLink>
        <HeaderLink
          id={2}
          url={'/'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
          Guides
        </HeaderLink>
        <HeaderLink
          id={3}
          url={'/'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
          Docs
        </HeaderLink>
        <HeaderLink
          id={4}
          url={'/'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
          Community
        </HeaderLink>
        <HeaderLink
          id={5}
          url={'/'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
          App Store
        </HeaderLink>
        <HeaderLink
          id={6}
          url={'/'}
          onHandleClick={false}
          changeLocale
          customClasses={false}
        >
          VTEX Partner
        </HeaderLink>
      </ul>
    )
  }
}

NavBar.propTypes = {
  locale: PropTypes.string,
  isOpen: PropTypes.bool,
  onHandleClick: PropTypes.func,
  location: PropTypes.object,
}

export default NavBar
