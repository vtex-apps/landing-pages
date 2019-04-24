import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import ProductDisplay from './components/Product'
import HowItWorks from './components/HowItWorks'
import EvolutionSection from './components/Evolution'
import KeyFeatures from './components/KeyFeatures'
import StartBuilding from './components/StartBuilding'
import Footer from './components/Footer'
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
      <Navbar enableLocaleSelector />
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
