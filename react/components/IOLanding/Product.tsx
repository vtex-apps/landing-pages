import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

import productImagePath from '../../images/Product.svg'

const ProductDisplay: FunctionComponent = () => {
  return (
    <section className="w-100 flex justify-between pv10 bg-base">
      <div className="c-muted-1 flex flex-column justify-center w-33 pl9">
        <p className="t-small">
          <FormattedMessage id="product.deliver" />
        </p>
        <p className="f1 mt1 mb1 w-90">
          <FormattedMessage id="product.scale" />
        </p>
        <p className="t-body w-90">
          <FormattedMessage id="product.cloud" />
        </p>
      </div>
      <img src={productImagePath} alt="Store Framework sample" />
    </section>
  )
}

export default ProductDisplay
