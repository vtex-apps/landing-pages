import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Button } from 'vtex.styleguide'

import IllustrationImage from '../../images/Illutration_02_blue.png'

const StartBuilding = () => (
  <section className="flex vh-100 c-muted-5 bg-muted-2">
    <div className="w-50">
      <img src={IllustrationImage} alt="" className="h-100 w-100" />
    </div>
    <div className="w-50 h-100 flex flex-column justify-between items-center">
      <p className="t-heading-1 w-50 normal h-50">
        <FormattedMessage id="startbuilding.title" />
      </p>
      <div className="w-50 h-50 flex flex-column justify-center pb4">
        <p className="t-body mb7">
          <FormattedMessage id="startbuilding.text" />
        </p>
        <div className="w-75 mb5">
          <Button variation="secondary">
            <p className="action-secondary">
              <FormattedMessage id="startbuilding.cta" />
            </p>
          </Button>
        </div>
      </div>
    </div>
  </section>
)

export default StartBuilding
