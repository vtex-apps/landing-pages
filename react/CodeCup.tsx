import React, { Fragment, Component } from 'react'
import { Helmet } from 'vtex.render-runtime'
import ReactGA from 'react-ga'

import favicon from './images/favicon.png'
import Header from './components/CodeCup/Header'
import About from './components/CodeCup/About'
import Rio from './components/CodeCup/Rio'
import Subscribe from './components/CodeCup/Subscribe'
import VTEX from './components/CodeCup/VTEX'
import FAQ from './components/CodeCup/FAQ'
import Footer from './components/CodeCup/Footer'
import Winners from './components/CodeCup/Winners'

import HomeImage from './images/imagem_home.jpg'

function initializeReactGA() {
  ReactGA.initialize('UA-139462697-1')
  ReactGA.pageview('/')
}
class Landing extends Component {
  public componentDidMount() {
    initializeReactGA()
  }

  public render() {
    return (
      <Fragment>
        <Helmet>
          <title>VTEX Code Cup</title>
          <meta name="title" content="VTEX Code Cup" />
          <meta name="description" content="The coding competition from VTEX" />
          <meta name="theme-color" content="#F71963" />
          <meta
            name="google-site-verification"
            content="w74PwlErxsMKe0Hp083-KEET2vwM2XcjzjiS4dZcThU"
          />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://codecup.vtex.com/" />
          <meta property="og:title" content="VTEX Code Cup" />
          <meta
            property="og:description"
            content="The coding competition from VTEX"
          />
          <meta property="og:image" content={HomeImage} />
          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://codecup.vtex.com/" />
          <meta property="twitter:title" content="VTEX Code Cup" />
          <meta
            property="twitter:description"
            content="The coding competition from VTEX"
          />
          <meta property="twitter:image" content={HomeImage} />
          <link rel="icon" href={favicon} />
        </Helmet>
        <main className="w-100 bg-white">
          <Header />
          <Winners />
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
