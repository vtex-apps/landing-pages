import React, { FunctionComponent } from 'react'
import { Spinner } from 'vtex.styleguide'

const RendererPlaceHolder: FunctionComponent = () => (
  <div className="pa7 bg-base--inverted br3 flex justify-center items-center">
    <Spinner />
  </div>
)

export default RendererPlaceHolder
