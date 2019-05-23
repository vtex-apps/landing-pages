import React, { FunctionComponent } from 'react'
import Carousel from 'nuka-carousel'

import Berlim from '../../images/berlim.png'
import HongKong from '../../images/hongkong.png'
import London from '../../images/londres.png'
import NewYork from '../../images/nyc.png'
import Rio from '../../images/rio.png'
import Santiago from '../../images/santiago.png'
import SaoPaulo from '../../images/saopaulo.png'

const Prizes: FunctionComponent = () => (
  <section className="pv7 flex justify-between">
    <div>
      <p className="t-heading-1 c-emphasis">PRÊMIO FINAL</p>
      <p>SANTIAGO</p>
      <p>NOVA YORQUE</p>
      <p>LONDRES</p>
      <p>BERLIM</p>
      <p>HONG KONG</p>
      <p>SÃO PAULO</p>
      <p>RIO DE JANEIRO</p>
    </div>
    <div className="w-50 center">
      <Carousel autoplay wrapAround heightMode="first">
        <img src={Berlim} alt="" />
        <img src={HongKong} alt="" />
        <img src={London} alt="" />
        <img src={NewYork} alt="" />
        <img src={Rio} alt="" />
        <img src={Santiago} alt="" />
        <img src={SaoPaulo} alt="" />
      </Carousel>
    </div>
  </section>
)

export default Prizes
