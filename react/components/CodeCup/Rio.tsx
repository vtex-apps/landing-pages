import React, { FunctionComponent } from 'react'

import RioImage from '../../images/06_foto_time.jpg'

const Rio: FunctionComponent = () => (
  <section
    className="w-100 vh-100 flex"
    style={{ backgroundImage: `url(${RioImage})` }}
  >
    <div className="flex items-center pl9">
      <p
        className="t-heading-1 c-on-base self-baseline"
        style={{ fontSize: `23rem` }}
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
