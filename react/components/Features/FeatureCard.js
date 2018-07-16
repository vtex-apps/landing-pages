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
      <div className="mt5 mb6 center mw6-ns flex justify-center">
        <div className="pa3 w-40 tc">
          <div className="fw5 f7 f5-ns ttu ph5 pt5 pb5">{title}</div>
          <Images image={imageId} />
        </div>
        <div className="pa5 f6 f5-ns fw2 w-60 lh-copy mid-gray">
          {description}
        </div>
      </div>
    )
  }
}

export default FeatureCard
