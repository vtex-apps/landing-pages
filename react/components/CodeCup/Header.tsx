import React, { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import HeaderImage from '../../images/imagem_home.jpg'
import Logo from '../../images/logo_codecup_01@2x.png'
import ArrowsDown from '../../images/setas_down@2x.png'
import Countdown from './Countdown'

const Header: FunctionComponent = () => {
  const [now, setNow] = useState(Date.now())

  return (
    <header className="flex w-100">
      <div
        className="bg-white flex justify-around pb9"
        style={{
          writingMode: 'vertical-lr',
          transform: 'rotate(-180deg)',
        }}
      >
        <div className="ph5">
          <p className="t-small c-muted-2">00 - 00 de maio de 2019</p>
          <p className="t-small">
            <strong>03 dias de competição</strong>
          </p>
        </div>
        <div className="ph5">
          <p className="t-small c-muted-2">+ título e comemoração</p>
          <p className="t-small">
            <strong>R$15.000 para o vencedor</strong>
          </p>
        </div>
        <div className="ph5">
          <p className="t-small c-muted-2">codecup@codecup.com.br</p>
          <p className="t-small">
            <strong>Rio de Janeiro . Brasil</strong>
          </p>
        </div>
      </div>
      <div
        className="flex flex-grow-1 pa9 flex-column justify-around c-muted-1"
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
        <div className="w-100 mv8 flex justify-between items-center flex-nowrap">
          <div className="w-50">
            <p className="t-heading-1">a maratona de programação da VTEX</p>
            <p className="t-heading-3 normal">
              a maratona de programação da VTEX para todos os aficionados por
              códigos e desafios.
            </p>
          </div>
          <div className="w-10 flex flex-column justify-around c-on-base">
            <div className="mv3">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="mv3">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="mv3">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
        <div className="flex items-center w-100 justify-around">
          <p className="self-end">00 A 00 DE MAIO . RIO DE JANEIRO . BRASIL</p>
          <img src={ArrowsDown} className="h3 self-end" />
          <Countdown deadline={new Date('May, 3, 2019, 19:00:00')} />
        </div>
      </div>
    </header>
  )
}

export default Header
