import React, { Component } from 'react'
import Button from '@vtex/styleguide/lib/Button'

const defaultClass = 'outline ph10 pv10 mh9-l mh2 ma5 bg-white serious-black'
class TechCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {content} = this.props
    return (
      <div class={defaultClass}>
        {content}
      </div>
    )
  }
}

TechCard.propTypes = {
  content: PropTypes.string,
}

export default TechCard
