import React, { FunctionComponent, useState } from 'react'
import Carousel from 'nuka-carousel'

import Berlim from '../../images/berlim.png'
import HongKong from '../../images/hongkong.png'
import London from '../../images/londres.png'
import NewYork from '../../images/nyc.png'
import Rio from '../../images/rio.png'
import Santiago from '../../images/santiago.png'
import SaoPaulo from '../../images/saopaulo.png'

const Prizes: FunctionComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="pv7 flex justify-between">
      <div>
        <p className="t-heading-1 c-emphasis">PRÊMIO FINAL</p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(0)}>
          SANTIAGO
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(1)}>
          NOVA YORQUE
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(2)}>
          LONDRES
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(3)}>
          BERLIM
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(4)}>
          HONG KONG
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(5)}>
          SÃO PAULO
        </p>
        <p className="t-heading-1" onMouseOver={() => setActiveSlide(6)}>
          RIO DE JANEIRO
        </p>
      </div>
      <div className="w-50 center">
        <Carousel
          wrapAround
          heightMode="first"
          slideIndex={activeSlide}
          afterSlide={() => setActiveSlide(activeSlide)}
          withoutControls
        >
          <img src={Santiago} alt="" />
          <img src={NewYork} alt="" />
          <img src={London} alt="" />
          <img src={Berlim} alt="" />
          <img src={HongKong} alt="" />
          <img src={SaoPaulo} alt="" />
          <img src={Rio} alt="" />
        </Carousel>
      </div>
    </section>
  )
}

export default Prizes
