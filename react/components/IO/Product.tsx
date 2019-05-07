import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import productImagePath from '../../images/Product.svg'

const ProductDisplay: FunctionComponent = () => {
  return (
    <section className="w-100 flex flex-column flex-row-l justify-between pv10 bg-base">
      <div className="c-muted-1 flex flex-column justify-center w-33-l pl9-l mh0-l">
        <p className="t-small w-90 center left-l">
          <FormattedMessage id="io.product.deliver" />
        </p>
        <p className="f1 mt1 mb1 w-90 center left-l">
          <FormattedMessage id="io.product.scale" />
        </p>
        <p className="t-body w-90 center left-l">
          <FormattedMessage id="io.product.cloud" />
        </p>
      </div>
      <img src={productImagePath} alt="Store Framework sample" />
    </section>
  )
}

export default ProductDisplay
