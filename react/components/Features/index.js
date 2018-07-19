import React, { Component, Fragment } from 'react'
import { FEATURES } from './constants'
import { map } from 'ramda'
import FeatureCard from './FeatureCard'


class Features extends Component {
  render() {
    return (
      <div className="h-100">
        <div className="cf pa7 pv9-ns serious-black ">
          {map(f => <FeatureCard {...f}/>, FEATURES)}
        </div>
      </div>
    )
  }
}

export default Features
