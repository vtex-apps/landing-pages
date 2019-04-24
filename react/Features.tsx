import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/IOLanding/Navbar'
import Footer from './components/IOLanding/Footer'
import favicon from './images/favicon.png'

const FeaturesDisplay: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Store Framework Features</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100 pv10">
        <h1 className="c-on-base t-heading-1 w-90 center">
          Store Framework Features
        </h1>
      </main>
      <Footer />
    </Fragment>
  )
}

export default injectIntl(FeaturesDisplay)
