import PropTypes from 'prop-types'
import React, { Component } from 'react'

class HeaderLink extends Component {
  render() {
    const {
      url,
      children,
      id,
    } = this.props
    const classes =
      'flex items-center tl dib br2 pa5 nowrap hover-bg-marine f5 fw5 font-display no-underline near-white'

    return (
      <a
        id={id}
        className={classes}
        href={url || '/'}
        rel="noopener"
        target="_blank"
      >
        {children}
      </a>
    )
  }
}

HeaderLink.propTypes = {
  children: PropTypes.object,
  url: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default HeaderLink
