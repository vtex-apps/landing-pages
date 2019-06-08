import React, { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { IconBars } from 'vtex.styleguide'

import HeaderImage from '../../images/imagem_home.jpg'
import Logo from '../../images/logo_codecup_01@2x.png'
import ArrowsDown from '../../images/setas_down@2x.png'
import Countdown from './Countdown'

const Header: FunctionComponent = () => {
  const [openNav, setOpenNav] = useState(false)

  return (
    <header className="flex flex-column-s flex-row-l w-100">
      <div
        className="bg-white flex-l dn-s justify-around pb9"
        style={{
          writingMode: 'vertical-lr',
          transform: 'rotate(-180deg)',
        }}
      >
        <div className="ph5">
          <p className="t-small c-muted-2">11 de maio de 2019</p>
          <p className="t-small">
            <strong>Primeira Fase Online</strong>
          </p>
        </div>
        <div className="ph5">
          <p className="t-small c-muted-2">08 de junho de 2019</p>
          <p className="t-small">
            <strong>Final presencial</strong>
          </p>
        </div>
        <div className="ph5">
          <p className="t-small c-muted-2">codecup@vtex.com</p>
          <p className="t-small">
            <strong>Rio de Janeiro . Brasil</strong>
          </p>
        </div>
      </div>
      <div
        className="flex flex-grow-1 pa9 flex-column justify-around c-muted-1 bg-center-l"
        style={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <nav className="flex">
          <div className="c-muted-1 w-100 flex flex-column flex-row-l justify-between">
            <div className="flex flex-column items-center">
              <img src={Logo} className="h3-l" alt="VTEX CODE CUP" />
              <button
                className="dn-l c-on-base w-33 mv7 bg-0 bn bg-transparent"
                onClick={() => setOpenNav(!openNav)}
              >
                <IconBars />
              </button>
            </div>
            <div className="flex-l" hidden={!openNav}>
              <div className="flex flex-column flex-row-l justify-center list mt0 items-center mb0">
                <p className="mh5-l mv5 mv0-l">
                  <a className="link c-muted-1" href="https://codecup.vtex.com">
                    <strong>HOME</strong>
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a className="link c-muted-1" href="#about">
                    <strong>O QUE É?</strong>
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a className="link c-muted-1" href="#faq">
                    <strong>FAQ</strong>
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a className="link c-muted-1" href="/rules">
                    <strong>REGRAS</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-100 mv8 flex flex-column flex-row-l justify-between items-center flex-nowrap">
          <div className="w-50-l">
            <p className="t-heading-1">a competição de programação da VTEX</p>
            <p className="t-heading-3 normal">
              Teste suas habilidades junto com os melhores programadores do
              Brasil
            </p>
          </div>
          <div className="w-10 dn flex-l flex-column justify-around c-on-base">
            <div className="mv3">
              <a
                className="link c-on-base"
                href="https://twitter.com/vtexonline"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div className="mv3">
              <a
                className="link c-on-base"
                href="https://www.facebook.com/vtexonline/"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="mv3">
              <a
                className="link c-on-base"
                href="https://www.instagram.com/vtextruecloud/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row-l flex-column items-center w-100 justify-around">
          <p className="self-end">08 DE JUNHO . FASE FINAL . BRASIL</p>
          <img
            src={ArrowsDown}
            className="h3 self-end-l"
            style={{ animation: 'bounce 3s infinite' }}
            alt=""
          />
          <div className="mt6">
            <Countdown date="June, 08, 2019, 15:00:00" />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-column dn-l justify-around">
        <div className="ph5">
          <p className="t-small">
            <strong>Primeira Fase Online</strong>
          </p>
          <p className="t-small c-muted-2">11 de maio de 2019</p>
        </div>
        <div className="ph5">
          <p className="t-small">
            <strong>Final presencial</strong>
          </p>
          <p className="t-small c-muted-2">08 de junho de 2019</p>
        </div>
        <div className="ph5">
          <p className="t-small">
            <strong>Rio de Janeiro . Brasil</strong>
          </p>
          <p className="t-small c-muted-2">codecup@vtex.com</p>
        </div>
      </div>
    </header>
  )
}

export default Header
