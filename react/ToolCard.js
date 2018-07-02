import React, { Component } from 'react'
import Images from './images/Images'
import PropTypes from 'prop-types'

class ToolCard extends Component {
  render() {
    const { image, title, subtitle, linkText, linkUrl } = this.props

    return (
      <div className="ba bw1 b--white w-30 center pa6 mr4 mb7">
        <div className="tc"><Images image={image} /></div>
        <div className="f5 fw7 tc mb3 mt2">{title}</div>
        <div className="f6 tc mb2 mid-gray">{subtitle}</div>
        <div className="tc">
          <a
            href={linkUrl}
            rel="noopener"
            target="_blank"
            className="link underline-hover rebel-pink fw5 f6"
          >
            {linkText}
          </a>
        </div>
      </div>
    )
  }
}

ToolCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
}

export default ToolCard
