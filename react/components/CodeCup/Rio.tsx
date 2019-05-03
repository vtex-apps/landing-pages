import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel'

import CarouselImage1 from '../../images/06_foto_time.jpg'
import CarouselImage2 from '../../images/05_foto_time.jpg'
import CarouselImage3 from '../../images/04_foto_time.jpg'
import CarouselImage4 from '../../images/03_foto_time.jpg'
import CarouselImage5 from '../../images/02_foto_rio.jpg'

const Rio: FunctionComponent = () => (
  <section>
    <Carousel>
      <div>
        <img src={CarouselImage1} />
      </div>
      <div>
        <img src={CarouselImage2} />
      </div>
      <div>
        <img src={CarouselImage3} />
      </div>
      <div>
        <img src={CarouselImage4} />
      </div>
      <div>
        <img src={CarouselImage5} />
      </div>
    </Carousel>
    {/* <div className="flex flex-row-l flex-column items-center justify-center-s pl9-l ph5">
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
    </div> */}
  </section>
)

export default Rio
