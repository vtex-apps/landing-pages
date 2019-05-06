import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/IO/Navbar'
import Hero from './components/IO/Hero'
import CardGrid from './components/IO/CardGrid'
import ProductDisplay from './components/IO/Product'
import HowItWorks from './components/IO/HowItWorks'
import EvolutionSection from './components/IO/Evolution'
import KeyFeatures from './components/IO/KeyFeatures'
import StartBuilding from './components/IO/StartBuilding'
import Footer from './components/IO/Footer'
import favicon from './images/favicon.png'

const Landing: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{intl.formatMessage({ id: 'io.page-title' })}</title>
        <meta
          name="description"
          content="A serverless development platform from VTEX."
        />
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100">
        <Hero />
        <CardGrid />
        <ProductDisplay />
        <HowItWorks />
        <EvolutionSection />
        <KeyFeatures />
        <StartBuilding />
      </main>
      <Footer />
    </Fragment>
  )
}

export default injectIntl(Landing)
