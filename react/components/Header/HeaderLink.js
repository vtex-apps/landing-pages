import PropTypes from 'prop-types'
import React, { Component } from 'react'

class HeaderLink extends Component {
  static propTypes = {
    url: PropTypes.string,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const {
      url,
      id,
      title,
    } = this.props
    const classes =
      'flex items-center tl dib br2 pa5-l pa3-m pa2 nowrap hover-bg-marine f5 fw5 font-display no-underline near-white'

    return (
      <a
        id={id}
        className={classes}
        href={url || '/'}
        rel="noopener"
        target="_blank"
      >
        <span>{title}</span>
      </a>
    )
  }
}

export default HeaderLink
