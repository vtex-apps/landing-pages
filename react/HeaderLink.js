import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'render'

class HeaderLink extends Component {
  render() {
    const {
      url,
      children,
      changeLocale,
      onHandleClick,
      customClasses,
      id,
    } = this.props
    const classes =
      'flex items-center tl dib br2 pa5 nowrap hover-bg-near-white hover-marine f5 fw5 font-display no-underline near-white'

    if (changeLocale) {
      return (
        <Link
          id={id}
          className={customClasses ? `${classes} ${customClasses}` : classes}
          to={url || '/'}
          onClick={onHandleClick}
        >
          <li>{children}</li>
        </Link>
      )
    }

    return (
      <a
        id={id}
        className={customClasses ? `${classes} ${customClasses}` : classes}
        href={url || '/'}
        target={this.props.externalURL ? 'blank' : null}
        rel={this.props.externalURL ? 'noopener' : null}
        onClick={onHandleClick}
      >
        {children}
      </a>
    )
  }
}

HeaderLink.propTypes = {
  children: PropTypes.object,
  url: PropTypes.string,
  changeLocale: PropTypes.bool,
  customClasses: PropTypes.string,
  externalURL: PropTypes.bool,
  onHandleClick: PropTypes.func,
  id: PropTypes.string.isRequired,
}

export default HeaderLink
