import React, { FunctionComponent } from 'react'

import Nav from './Nav'

import Slider1 from '../../images/slider1.png'
import Slider2 from '../../images/slider2.png'
import Slider3 from '../../images/slider3.png'
import Carousel from 'nuka-carousel'

const Header: FunctionComponent = () => (
  <header className="bg-emphasis">
    <Nav />
    <div className="flex justify-around pa7">
      <div className="flex flex-column justify-around w-50">
        <p className="t-heading-1">
          AS PERGUNTAS QUE PODEM DEFINIR O SEU FUTURO JÁ ESTÃO PRONTAS
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
          consectetur aliquam iste, sint dolores quaerat qui deleniti ut unde
          minima autem dicta accusantium quae rem repudiandae in cupiditate
          perferendis facere!
        </p>
        <button className="c-emphasis br-pill mt6 mb3 bg-base-inverted ph9 b--none pointer w-40">
          <p className="t-heading-4 mv4">Participar</p>
        </button>
      </div>
      <div className="w-50">
        <Carousel autoplay wrapAround heightMode="first">
          <img src={Slider1} alt="" />
          <img src={Slider2} alt="" />
          <img src={Slider3} alt="" />
        </Carousel>
      </div>
    </div>
  </header>
)

export default Header
