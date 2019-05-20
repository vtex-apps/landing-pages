import React from 'react'
import { FormattedMessage } from 'react-intl'

import CodeSampleImage from '../../images/Asset7.png'
import BackgroundEffects from '../../images/BackgroundEffects.svg'

const EvolutionSection = () => (
  <section className="flex flex-column flex-row-l items-center vh-100-l">
    <div
      className="c-muted-1 w-50-l w-100 h-75 bg-muted-3 flex justify-center items-center order-1 order-0-l"
      style={{ backgroundImage: `url(${BackgroundEffects})` }}
    >
      <img src={CodeSampleImage} className="c-muted-1 z-4" alt="code-sample" />
    </div>
    <div className="w-90-s center w-50-l w-100-s pl10-l flex flex-column justify-center">
      <div className="order-0 order-1-l w-90 center mh7">
        <p className="c-muted-1 t-small w-90">
          <FormattedMessage id="io.evolution.focus" />
        </p>
        <p className="c-muted-1 f1 mt1 mb1 w-75">
          <FormattedMessage id="io.evolution.evolution" />
        </p>
        <p className="c-muted-1 t-body w-90 lh-copy mb7">
          <FormattedMessage id="io.evolution.perspective" />
        </p>
      </div>
      <div className="order-2-s w-90 center mh7">
        <p className="c-muted-1 t-body w-90 mt7 mb2">
          <FormattedMessage id="io.evolution.vtexio" />
        </p>
        <p className="c-muted-1 t-body w-90 lh-copy">
          <FormattedMessage id="io.evolution.vtexio.description" />
        </p>
      </div>
    </div>
  </section>
)

export default EvolutionSection
