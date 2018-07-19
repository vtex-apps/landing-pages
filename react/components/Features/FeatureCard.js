import React, { Component } from 'react'
import Images from '../../images/Images'
import PropTypes from 'prop-types'

class FeatureCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
  }

  render() {
    const { title, imageId, description } = this.props
    return (
      <div className="center mb5 mb9-ns w-100 flex-ns justify-center">
        <div className="tc w5-ns pa3-ns pa5">
          <div className="lh-title fw5 f6 f5-ns ttu ph5-ns pv5">{title}</div>
          <Images image={imageId} />
        </div>
        <div className="pa5 f5 fw2 lh-copy mid-gray w-30-ns w-90 ma0-ns center">
          {description}
        </div>
      </div>
    )
  }
}

export default FeatureCard
