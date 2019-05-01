import React, { Fragment, FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'
import Header from './components/CodeCup/Header'

const Landing: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{intl.formatMessage({ id: 'codecup.page-title' })}</title>
        <meta name="description" content="Coding competition from VTEX" />
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <main className="w-100 bg-base--inverted">
        <Header />
      </main>
    </Fragment>
  )
}

export default injectIntl(Landing)
