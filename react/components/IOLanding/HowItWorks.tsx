import React, { FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import Stack from './icons/Stack'
import Branches from './icons/Branches'
import AppStore from './icons/AppStore'

const HowItWorks: FunctionComponent<InjectedIntlProps> = ({ intl }) => {
  return (
    <section className="flex items-center justify-between w-90 vh-75 center c-muted-1">
      <article className="mh7">
        <Stack />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.appstore.scale' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.appstore' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.appstore.solutions' })}
        </p>
      </article>
      <article className="mh7">
        <Branches />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.abtesting.decisions' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.abtesting' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.abtesting.tests' })}
        </p>
      </article>
      <article className="mh7">
        <AppStore />
        <p className="t-body mb3">
          {intl.formatMessage({ id: 'io.howitworks.storeframework.build' })}
        </p>
        <p className="f2 mt0">
          {intl.formatMessage({ id: 'io.howitworks.storeframework' })}
        </p>
        <p className="t-body lh-copy">
          {intl.formatMessage({ id: 'io.howitworks.storeframework.develop' })}
        </p>
      </article>
    </section>
  )
}

export default injectIntl(HowItWorks)
