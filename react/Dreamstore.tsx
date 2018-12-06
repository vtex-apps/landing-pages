import React, { Component } from 'react'
import { Helmet } from 'render'

import favicon from './images/favicon.png'

export default class Dreamstore extends Component {
  public render() {
    return (
      <main>
        <Helmet>
          <title>VTEX Dreamstore - The next generation store framework</title>
          <meta name="description" content="A consistent toolset to create high-quality e-commerce experiences fast." />
          <meta name="theme-color" content="#F71963" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <div>
          <h1>Hello, Dreamstore!</h1>
        </div>
      </main>
    )
  }
}
