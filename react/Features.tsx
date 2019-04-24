import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import favicon from './images/favicon.png'

import { storeComponents, storePixel } from './FeaturesData'

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
        <h1 className="c-emphasis t-heading-1 w-90 center">Store Framework</h1>
        <section className="flex flex-column w-90 center">
          <h2 className="c-emphasis t-heading-2">Store Component Apps</h2>
          <ul className="t-body list">
            {storeComponents.map(component => (
              <li className="mv7 bb b--muted-2">
                <p>{component.name}</p>
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
