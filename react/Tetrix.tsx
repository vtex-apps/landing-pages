import React, { FunctionComponent, Fragment } from 'react'
import { Helmet } from 'vtex.render-runtime'

import Header from './components/Tetrix/Header'
import About from './components/Tetrix/About'
import Video from './components/Tetrix/Video'
import Prizes from './components/Tetrix/Prizes'
import FAQ from './components/Tetrix/FAQ'
import Footer from './components/Tetrix/Footer'
import HowItWorks from './components/Tetrix/HowItWorks'

const Tetrix: FunctionComponent = () => (
  <Fragment>
    <Helmet>
      <title>Tetrix - O Desafio</title>
      <meta name="title" content="Tetrix" />
      {/* <meta name="description" content="The coding competition from VTEX" /> */}
      <meta name="theme-color" content="#F71963" />
      {/* <meta
        name="google-site-verification"
        content="w74PwlErxsMKe0Hp083-KEET2vwM2XcjzjiS4dZcThU"
      /> */}
      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codecup.vtex.com/" />
      <meta property="og:title" content="VTEX Code Cup" />
      <meta
        property="og:description"
        content="The coding competition from VTEX"
      />
      <meta property="og:image" content={HomeImage} /> */}
      {/* <!-- Twitter --> */}
      {/* <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://codecup.vtex.com/" />
      <meta property="twitter:title" content="VTEX Code Cup" />
      <meta
        property="twitter:description"
        content="The coding competition from VTEX"
      />
      <meta property="twitter:image" content={HomeImage} /> */}
      {/* <link rel="icon" href={favicon} /> */}
    </Helmet>
    <main className="w-100 bg-white">
      <div className="w-90-l center">
        <Header />
        <About />
        <Video />
        <HowItWorks />
        <Prizes />
        <FAQ />
      </div>
    </main>
    <Footer />
  </Fragment>
)

export default Tetrix
