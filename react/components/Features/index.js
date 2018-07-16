import React, { Component, Fragment } from 'react'
import { FEATURES } from './constants'
import { map } from 'ramda'
import FeatureCard from './FeatureCard'


class Features extends Component {
  render() {
    return (
      <div className="h-100">
        <div className="cf pa9-ns serious-black flex flex-wrap">
          {map(f => <FeatureCard {...f}/>, FEATURES)}
        </div>
      </div>
    )
  }
}

export default Features
