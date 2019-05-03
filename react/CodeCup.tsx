import React, { Fragment, FunctionComponent, Component } from 'react'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'
import Header from './components/CodeCup/Header'
import About from './components/CodeCup/About'
import Rio from './components/CodeCup/Rio'
import Subscribe from './components/CodeCup/Subscribe'
import VTEX from './components/CodeCup/VTEX'
import FAQ from './components/CodeCup/FAQ'
import Footer from './components/CodeCup/Footer'

class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>VTEX Code Cup</title>
          <meta name="description" content="Coding competition from VTEX" />
          <meta name="theme-color" content="#F71963" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <main className="w-100 bg-white">
          <Header />
          <About />
          <Rio />
          <Subscribe />
          <VTEX />
          <FAQ />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Landing
