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
    <section
      id="prize"
      className="pv7 flex flex-row-l flex-column justify-between w-90 center mv8"
    >
      <div className="w-90 center w-50-l">
        <p className="t-heading-1 c-emphasis">PRÊMIO FINAL</p>
        <p className="w-90-l">
          Quem vencer o desafio será levado para uma jornada de desenvolvimento
          para conhecer tudo que existe sobre comércio global, guiado por uma
          das maiores empresas desse mundo.
        </p>
        <p
          className={`${
            activeSlide === 0 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(0)}
          onClick={() => setActiveSlide(0)}
        >
          SANTIAGO
        </p>
        <p
          className={`${
            activeSlide === 1 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(1)}
          onClick={() => setActiveSlide(1)}
        >
          NOVA YORQUE
        </p>
        <p
          className={`${
            activeSlide === 2 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(2)}
          onClick={() => setActiveSlide(2)}
        >
          LONDRES
        </p>
        <p
          className={`${
            activeSlide === 3 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(3)}
          onClick={() => setActiveSlide(3)}
        >
          BERLIM
        </p>
        <p
          className={`${
            activeSlide === 4 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(4)}
          onClick={() => setActiveSlide(4)}
        >
          HONG KONG
        </p>
        <p
          className={`${
            activeSlide === 5 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(5)}
          onClick={() => setActiveSlide(5)}
        >
          SÃO PAULO
        </p>
        <p
          className={`${
            activeSlide === 6 ? 't-heading-1 c-emphasis' : 't-heading-2'
          } pointer`}
          onMouseOver={() => setActiveSlide(6)}
          onClick={() => setActiveSlide(6)}
        >
          RIO DE JANEIRO
        </p>
      </div>
      <div className="w-50-l w-75 center">
        <Carousel heightMode="first" slideIndex={activeSlide} withoutControls>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              E-commerce na América Latina - visão e desafios: identificar as
              características do mercado e dos clientes latinos.
            </p>
            <img src={Santiago} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Megalópole digital - networking e expansão de negócios em
              inovação: colocar em prática habilidades de desenvolvimento de
              networking na área de tecnologia.
            </p>
            <img src={NewYork} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Fintechs - a inovação tecnológica revolucionando o mercado
              financeiro global: entender como as fintechs revolucionaram o
              mercado mundial e os desafios a seu desenvolvimento como, por
              exemplo, os limites impostos por diferentes regulações feitas
              pelos países.
            </p>
            <img src={London} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Inovação tecnológica: desenvolvimento do olhar mais afeto às
              pesquisas, centros tecnológicos, universidades, para se antecipar
              nos negócios digitais.
            </p>
            <img src={Berlim} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Visão para o futuro: novos mercados, diferentes culturas, conhecer
              os desafios de empreender em uma cultura diferente da brasileira.
            </p>
            <img src={HongKong} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Centro de negócios do Brasil e da América Latina: conhecer a os
              diferenciais da capital paulista no cenário do comércio eletrônico
              brasileiro e reconhecer sua posição de importância no cenário do
              e-commerce da América Latina.
            </p>
            <img src={SaoPaulo} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Negócios digitais na prática: conhecer e entender os desafios no
              desenvolvimento e na programação da infraestrutura de negócios
              digitais.
            </p>
            <img src={Rio} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Prizes
