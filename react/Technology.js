import React, { Component } from 'react'
import Button from '@vtex/styleguide/lib/Button'
import Card from '@vtex/styleguide/lib/Card'
import TechCard from './TechCard'

const defaultClass = 'outline ph10 pv10 mh9-l mh2 ma5 bg-white serious-black'
class Technology extends Component {
  render() {
    return (
      <article className="vh-100 h-200 w-100 bg-vtex-pink mt10">
        <div className="flex flex-wrap pa10-m pa5 tc">
          <TechCard content="1" />
          <div className={defaultClass}>
            <code>2</code>
          </div>
          <div className={defaultClass}>
            <code>3</code>
          </div>
          <div className={defaultClass}>
            <code>4</code>
          </div>
          <div className={defaultClass}>
            <code>5</code>
          </div>
          <div className={defaultClass}>
            <code>6</code>
          </div>
        </div>
      </article>
    )
  }
}

export default Technology
