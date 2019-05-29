import React, { FunctionComponent } from 'react'

import Nav from './Nav'

import Slider1 from '../../images/slider1.png'
import Slider2 from '../../images/slider2.png'
import Slider3 from '../../images/slider3.png'
import Carousel from 'nuka-carousel'

const Header: FunctionComponent = () => (
  <header className="bg-emphasis pa9">
    <Nav />
    <div className="flex flex-column flex-row-l justify-around items-center mt5">
      <div className="flex flex-column justify-around w-40-l w-90 order-1 order-0-l">
        <p className="t-heading-2 c-on-base bold">
          QUAL A ÚLTIMA VEZ QUE VOCÊ SE SURPREENDEU COM <br />
          <span className="underline c-muted-5">VOCÊ MESMO?</span>
        </p>
        <p className="c-on-base lh-copy">
          No Tetrix, o Desafio, você será capaz de descobrir se o seu
          conhecimento tem fim e, somente ao superá-lo, encontrará respostas às
          perguntas que podem definir seu futuro. Vença e seja levado a uma
          jornada de desenvolvimento pelo mundo.
        </p>
        <p className="c-muted-5 b">Inscreva-se até o dia 07 de julho.</p>
        <button className="c-emphasis br-pill mt6 mb3 bg-base--inverted ph7 b--none pointer w-50-l">
          <p className="t-heading-4 mv4">Participar</p>
        </button>
      </div>
      <div className="w-40-l w-90 order-0 order-1-l">
        <Carousel autoplay wrapAround withoutControls>
          <img src={Slider1} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} alt="" />
        </Carousel>
      </div>
    </div>
  </header>
)

export default Header
