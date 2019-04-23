import React, { Component, Fragment } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'

class StoreFramework extends Component<InjectedIntlProps> {
  public render() {
    const { intl } = this.props

    return (
      <Fragment>
        <Helmet>
          <title>
            {intl.formatMessage({ id: 'store-framework.page-title' })}
          </title>
          <meta
            name="description"
            content="A consistent toolset to create high-quality e-commerce experiences fast."
          />
          <meta name="theme-color" content="#F71963" />
          <link rel="icon" href={favicon} />
        </Helmet>
        <main>
          <div className="w-40-ns w-90 center flex flex-column vh-100-ns justify-center">
            <div className="mt9">
              <div className="t-heading-1 c-on-base pb4 lh-solid pt7">
                {intl.formatMessage({ id: 'store-framework.title' })}
              </div>
              <div className="t-heading-3 c-on-base fw3 pb6 pt4 lh-title">
                {intl.formatMessage({ id: 'store-framework.subtitle' })}
              </div>
            </div>
            <div className="pv7 bt bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">1.</span>{' '}
                {intl.formatMessage({ id: 'store-framework.announcement' })}
                <span className="c-muted-3">
                  {' '}
                  [{intl.formatMessage({ id: 'store-framework.soon' })}]
                </span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">2.</span>{' '}
                {intl.formatMessage({ id: 'store-framework.getting-started' })}
                <span className="c-muted-3">
                  {' '}
                  [{intl.formatMessage({ id: 'store-framework.soon' })}]
                </span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3">
              <a className="c-on-base link">
                <span className="c-emphasis">3.</span>{' '}
                {intl.formatMessage({ id: 'store-framework.store-builder' })}
                <span className="c-muted-3">
                  {' '}
                  [{intl.formatMessage({ id: 'store-framework.soon' })}]
                </span>
              </a>
            </div>
            <div className="pv7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3 pointer dim">
              <a className="c-on-base link" href="https://styleguide.vtex.com">
                <span className="c-emphasis">4.</span>{' '}
                {intl.formatMessage({ id: 'store-framework.styles' })}
              </a>
            </div>
            <div className="pv7 mb7 bb b--muted-3 t-heading-2-ns fw3-ns t-heading-3 fw3 pointer dim">
              <a
                className="c-on-base link"
                href="https://github.com/vtex-apps/awesome-io"
              >
                <span className="c-emphasis">5.</span>{' '}
                {intl.formatMessage({ id: 'store-framework.contribute' })}
              </a>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

export default injectIntl(StoreFramework)
