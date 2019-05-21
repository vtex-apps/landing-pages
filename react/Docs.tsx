import React, { Fragment, FunctionComponent } from 'react'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/IO/Navbar'
import Footer from './components/IO/Footer'
import SideBar from './components/Docs/SideBar'
import DocsRenderer from './components/Docs/DocsRenderer'
import favicon from './images/favicon.png'

import { availableDocs } from './DocsData'

const Docs: FunctionComponent<any> = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Docs</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="flex-l">
        <aside className="pt10 w-25-l ml5-l w-90 center">
          <SideBar componentList={availableDocs} />
        </aside>
        <main className="pv10 w-70-l w-90 center">
          <DocsRenderer />
        </main>
      </div>
      <Footer />
    </Fragment>
  )
}

export default Docs
