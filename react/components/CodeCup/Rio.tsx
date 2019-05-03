import React, { FunctionComponent } from 'react'
import Carousel from 'nuka-carousel'

import CarouselImage1 from '../../images/06_foto_time.jpg'
import CarouselImage2 from '../../images/05_foto_time.jpg'
import CarouselImage3 from '../../images/04_foto_time.jpg'
import CarouselImage4 from '../../images/03_foto_time.jpg'
import CarouselImage5 from '../../images/02_foto_rio.jpg'

const Rio: FunctionComponent = () => (
  <section>
    <Carousel autoplay wrapAround withoutControls heightMode="first">
      <img src={CarouselImage1} />
      <img src={CarouselImage2} />
      <img src={CarouselImage3} />
      <img src={CarouselImage4} />
      <img src={CarouselImage5} />
    </Carousel>
  </section>
)

export default Rio
