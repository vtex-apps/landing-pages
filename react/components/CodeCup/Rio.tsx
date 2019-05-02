import React, { FunctionComponent } from 'react'

import RioImage from '../../images/06_foto_time.jpg'

const Rio: FunctionComponent = () => (
  <section
    className="w-100"
    style={{
      backgroundImage: `url(${RioImage})`,
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="flex items-center pl9">
      <p
        className="t-heading-1 mb3 pt5 c-on-base self-baseline"
        style={{ fontSize: `20rem` }}
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
