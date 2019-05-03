import React, { FunctionComponent, Fragment } from 'react'

import RioImage from '../../images/06_foto_time.jpg'

const Rio: FunctionComponent = () => (
  <section
    className="flex-l vh-75 bg-left"
    style={{
      backgroundImage: `url(${RioImage})`,
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="flex flex-row-l flex-column items-center justify-center-s pl9-l ph5">
      <p
        className="t-heading-1 mb3 pt5 c-on-base self-baseline dn flex-l"
        style={{ fontSize: `20rem` }}
      >
        rio
      </p>
      <p
        className="t-heading-1 mb3 pa5 c-on-base self-baseline dn-l"
        style={{ fontSize: `5rem` }}
      >
        rio
      </p>
      <p className="self-baseline t-heading-3 normal c-on-base">
        cidade da maratona de programação da VTEX
      </p>
    </div>
  </section>
)

export default Rio
