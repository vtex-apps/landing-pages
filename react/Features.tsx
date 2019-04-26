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
        <title>Store Framework</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <main className="w-100 pv10 bg-base--inverted">
        <h1 className="c-emphasis t-heading-1 w-90 center">
          Store Framework Features
        </h1>
        <section className="flex flex-column w-90 center">
          <h2 className="c-emphasis t-heading-2">VTEX CMS Features</h2>
          <ul className="t-body list">
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
                <div>
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
        <section className="flex flex-column w-90 center">
          <h2 className="c-emphasis t-heading-2">Store Component Apps</h2>
          <ul className="t-body list">
            {storeComponents.map(component => (
              <li className="mv7 bb b--muted-2">
                <p>
                  {component.name}{' '}
                  {component.construction && '[Under Construction] 🚧'}
                </p>
                <p>
                  <a className="c-muted-2 link" href={component.docs}>
                    {component.docs}
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-column w-90 center">
          <h2 className="c-emphasis t-heading-2">Store Pixel Apps</h2>
          <ul className="t-body list">
            {storePixel.map(app => (
              <li className="mv7 bb b--muted-2">
                <p>{app.name}</p>
                <p className="c-muted-2">{app.docs}</p>
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
