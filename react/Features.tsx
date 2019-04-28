import React, { Fragment, FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'vtex.render-runtime'
import { IconCheck, IconDeny } from 'vtex.styleguide'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import favicon from './images/favicon.png'

import { storeComponents, storePixel, features } from './FeaturesData'

const FeaturesDisplay: FunctionComponent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Store</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100 pv10 bg-base--inverted">
        <div className="flex-ns items-baseline w-90 w-80-ns center mb8">
          <h1 className="c-base t-heading-1 pr7">Store Features</h1>
          <nav>
            <ul className="flex-ns list t-heading-5 pl0">
              <li className="pr6 pb4 pb0-ns"><a href="#vtex-oms-comparison" className="no-underline c-emphasis dim">CMS Comparison</a></li>
              <li className="pr6 pb4 pb0-ns"><a href="#store-component-apps" className="no-underline c-emphasis dim">Store Component Apps</a></li>
              <li><a href="#store-pixel-apps" className="no-underline c-emphasis dim">Store Pixel Apps</a></li>
            </ul>
          </nav>
        </div>
        <section
          id="vtex-oms-comparison"
          className="flex flex-column w-90 w-80-ns center"
          >
          <h2 className="c-base t-heading-3 fw3 mb0 mt4">VTEX CMS Comparison</h2>
          <ul className="t-body list pl0 mt0">
            <li className="pv5 bb b--muted-2 flex justify-between items-center">
              <div>
                <p>Feature</p>
                <p className="c-muted-2">Description</p>
              </div>
              <div className="flex justify-around w-40">
                <p>Old CMS</p>
                <p>New CMS</p>
              </div>
            </li>
            {features.map(feature => (
              <li className="pv5 bb b--muted-2 flex justify-between items-center">
                <div className="w-60">
                  <p>
                    <FormattedMessage id={`cms-features.${feature.id}`} />
                  </p>
                  <p className="c-muted-2">
                    <FormattedMessage
                      id={`cms-features.${feature.id}.description`}
                    />
                  </p>
                </div>
                <div className="flex justify-around w-40">
                  {feature.old ? (
                    <div className="c-success">
                      <IconCheck size="25" />
                    </div>
                  ) : (
                    <div className="c-danger">
                      <IconDeny size="20" />
                    </div>
                  )}
                  {feature.new ? (
                    <div className="c-success">
                      <IconCheck size="25" />
                    </div>
                  ) : (
                    <div className="c-danger">
                      <IconDeny size="20" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="store-component-apps"
          className="flex flex-column w-90 w-80-ns center pt8"
        >
          <h2 className="c-base t-heading-3 fw3 mb0 mt4">Store Component Apps</h2>
          <ul className="t-body list pl0 mt0">
            {storeComponents.map(component => (
              <li className="mv7 bb b--muted-2">
                <p>
                  {component.name}{' '}
                  {component.construction && '[Under Construction] 🚧'}
                </p>
                <p>
                  <a className="link" href={component.docs}>
                    {component.docs}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          id="store-pixel-apps"
          className="flex flex-column w-90 w-80-ns center pt8"
        >
          <h2 className="c-base t-heading-3 fw3 mb0 mt4">Store Pixel Apps</h2>
          <ul className="t-body list pl0 mt0">
            {storePixel.map(app => (
              <li className="mv7 bb b--muted-2">
                <p>{app.name}</p>
                <p>
                  <a className="link" href={app.docs}>
                    {app.docs}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default FeaturesDisplay
