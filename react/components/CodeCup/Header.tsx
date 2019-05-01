import React, { FunctionComponent } from 'react'

import HeaderImage from '../../images/imagem_home.jpg'
import Logo from '../../images/logo_codecup_01@2x.png'

const Header: FunctionComponent = () => (
  <header className="flex w-100">
    <div
      className="bg-white flex justify-around"
      style={{ writingMode: 'vertical-lr' }}
    >
      <p>03 dias de competição </p>
      <p>R$15.000 para o vencedor</p>
      <p>Rio de Janeiro . Brasil</p>
    </div>
    <div
      className="vh-100 flex-grow-1"
      style={{
        backgroundImage: `url(${HeaderImage})`,
      }}
    >
      <nav>
        <img src={Logo} />
      </nav>
    </div>
  </header>
)

export default Header
