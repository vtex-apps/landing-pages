import React, { FunctionComponent } from 'react'

import HeaderImage from '../../images/imagem_home.jpg'
import Logo from '../../images/logo_codecup_01@2x.png'
import ArrowsDown from '../../images/setas_down@2x.png'

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
      className="vh-100 flex flex-grow-1 pa9 flex-column justify-around c-muted-1"
      style={{
        backgroundImage: `url(${HeaderImage})`,
      }}
    >
      <nav className="flex">
        <div className="c-muted-1 w-100 flex flex-column flex-row-l justify-between">
          <img src={Logo} className="h3" alt="VTEX CODE CUP" />
          <div className="flex-l">
            <ul className="flex flex-column flex-row-l justify-center list mt0 items-center mb0 relative">
              <li className="mh5 mv5 mv0-l">
                <a
                  className="link c-muted-1"
                  href="https://docs.google.com/document/d/1ZM0sF22yPxaKZ9jvKWR-h8Ba00shHZS5uWgQmA8Tg7U/edit?usp=sharing"
                >
                  HOME
                </a>
              </li>
              <li className="mh5 mv5 mv0-l bold">O QUE É</li>
              <li className="mh5 mv5 mv0-l bold">FAQ</li>
              <li className="mh5 mv5 mv0-l bold">REGRAS</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-50">
        <p className="t-heading-1">a maratona de programação da VTEX</p>
        <p className="t-heading-3 normal">
          a maratona de programação da VTEX para todos os aficionados por
          códigos e desafios.
        </p>
      </div>
      <div className="flex items-center w-100 justify-around">
        <p>00 A 00 DE MAIO . RIO DE JANEIRO . BRASIL</p>
        <img src={ArrowsDown} />
        <div className="pa5 br3 bg-emphasis">
          <p> Countdown placeholder </p>
        </div>
      </div>
    </div>
  </header>
)

export default Header
