import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FooterLink extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }

  render() {
    const { href, label } = this.props
    return <a
      href={href}
      rel="noopener"
      target="_blank"
      className="mr4-ns mr6 link underline-hover near-white"
      >
        {label}
      </a>
  }
}

export default FooterLink
