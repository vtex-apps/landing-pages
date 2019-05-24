import React, { FunctionComponent } from 'react'

import Nav from './Nav'

import Slider1 from '../../images/slider1.png'
import Slider2 from '../../images/slider2.png'
import Slider3 from '../../images/slider3.png'
import Carousel from 'nuka-carousel'

const Header: FunctionComponent = () => (
  <header className="bg-emphasis pa9">
    <Nav />
    <div className="flex justify-around items-center mt5">
      <div className="flex flex-column justify-around w-40">
        <p className="t-heading-2 c-on-base bold">
          AS PERGUNTAS QUE PODEM DEFINIR O SEU FUTURO <br />
          <span className="underline c-muted-5">JÁ ESTÃO PRONTAS.</span>
        </p>
        <p className="c-on-base lh-copy" style={{ fontFamily: 'Space Mono' }}>
          No Tetrix, o Desafio, você será capaz de descobrir se o seu
          conhecimento tem fim, e somente ao superá-lo, encontrará respostas às
          perguntas que podem definir seu futuro. Vença e seja levado a uma
          jornada de desenvolvimento pelo mundo. Inscreva-se até o dia 30 de
          junho.
        </p>
        <button className="c-emphasis br-pill mt6 mb3 bg-base-inverted ph7 b--none pointer w-50">
          <p className="t-heading-4 mv4" style={{ fontFamily: 'Space Mono' }}>
            Participar
          </p>
        </button>
      </div>
      <div className="w-40">
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
