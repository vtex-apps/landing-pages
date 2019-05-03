import React, { FunctionComponent, Fragment } from 'react'

import RioImage from '../../images/06_foto_time.jpg'
import RioImageMobile from '../../images/02_foto_rio.jpg'

const Rio: FunctionComponent = () => (
  <Fragment>
    <section
      className="flex-l bg-center vh-75 dn"
      style={{
        backgroundImage: `url(${RioImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-row-l flex-column items-center justify-center-s pl9-l">
        <p
          className="t-heading-1 mb3 pt5 c-on-base self-baseline dn flex-l"
          style={{ fontSize: `20rem` }}
        >
          rio
        </p>
        <p className="t-heading-1 mb3 pt5 c-on-base self-baseline dn-l">rio</p>
        <p className="self-baseline t-heading-3 normal c-on-base">
          cidade da maratona de programação da VTEX
        </p>
      </div>
    </section>
    <section
      className="flex bg-center vh-75 dn-l"
      style={{
        backgroundImage: `url(${RioImageMobile})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-row-l flex-column items-center justify-center-s pl9-l">
        <p
          className="t-heading-1 mb3 pt5 c-on-base self-baseline dn flex-l"
          style={{ fontSize: `20rem` }}
        >
          rio
        </p>
        <p className="t-heading-1 mb3 pt5 c-on-base self-baseline dn-l">rio</p>
        <p className="self-baseline t-heading-3 normal c-on-base">
          cidade da maratona de programação da VTEX
        </p>
      </div>
    </section>
  </Fragment>
)

export default Rio
