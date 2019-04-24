import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuestionList from './components/QuestionList'
import favicon from './images/favicon.png'

const FAQ: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{intl.formatMessage({ id: 'io.faq.page-title' })}</title>
        <meta
          name="description"
          content="A serverless development platform from VTEX."
        />
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100 pv10 bg-base--inverted">
        <h1 className="c-muted-5 t-heading-1 w-90 center">
          Frequently Asked Questions
        </h1>
        <QuestionList />
      </main>
      <Footer />
    </Fragment>
  )
}

export default injectIntl(FAQ)
