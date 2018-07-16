import React, { Component } from 'react'
import ToolCard from './ToolCard'
import { TOOLCARDS } from './constants'
import { map } from 'ramda'

class Tools extends Component {
  render() {
    return (
      <div className="h-100 bg-near-white">
        <div className="cf pa9-ns">
          <div className="mt5 mb5 center mw8-l mw7-m mw6-ns pa8-ns pa7-s pa6 serious-black">
            <h1 className="fw1 f2">
              Tools and APIs
            </h1>
            <div className="pv3 mb4 fw3 f3-ns f4-s mb9 ph0-ns">
              Take advantage of our powerful suite of tools and APIs
            </div>
            <div className="flex flex-wrap ph0-ns ph7-s">
              {map(t => <ToolCard {...t} />, TOOLCARDS)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tools
