import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import Brands from '../../images/Brands.svg'

const Hero: FunctionComponent = () => {
  return (
    <section
      className="mb5 pt6 pb8 bg-base c-muted-1 flex flex-column items-center justify-center"
      style={{ backgroundImage: `url(${Brands})` }}
    >
      <p className="tc w-40 mb0 t-heading-1 normal">
        <FormattedMessage id="hero.globalbrands" />
      </p>
      <p className="w-40 t-body tc mv6">
        <FormattedMessage id="hero.resources" />
      </p>
      <div className="mt5">
        <Button variation="primary">
          <p className="ttu">
            <FormattedMessage id="hero.cta" />
          </p>
        </Button>
      </div>
      <a
        className="tc c-muted-1 mt5 t-small"
        href="https://www.vtex.com/partner/program/"
      >
        <FormattedMessage id="hero.partners" />
      </a>
    </section>
  )
}

export default Hero
