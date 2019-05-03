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
          <p className="t-small c-muted-2">03 - 10 de maio de 2019</p>
          <p className="t-small">
            <strong>Inscrições Online</strong>
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
                  <a className="link c-muted-1" href="#">
                    HOME
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a className="link c-muted-1" href="#about">
                    O QUE É?
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a className="link c-muted-1" href="#faq">
                    FAQ
                  </a>
                </p>
                <p className="mh5-l mv5 mv0-l bold">
                  <a
                    className="link c-muted-1"
                    href="https://drive.google.com/file/d/1OLKAaJV2Caw-g8VWg357U2p06uDu94Hi/view"
                  >
                    REGRAS
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="w-100 mv8 flex flex-column flex-row-l justify-between items-center flex-nowrap">
          <div className="w-50-l">
            <p className="t-heading-1">a maratona de programação da VTEX</p>
            <p className="t-heading-3 normal">
              a maratona de programação da VTEX para todos os aficionados por
              códigos e desafios.
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
          <p className="self-end">03 A 10 DE MAIO . INSCRIÇÕES . BRASIL</p>
          <img
            src={ArrowsDown}
            className="h3 self-end-l"
            style={{ animation: 'bounce 3s infinite' }}
          />
          <div className="mt6">
            <Countdown date="May, 3, 2019, 19:00:00" />
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-column dn-l justify-around">
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
    </header>
  )
}

export default Header
