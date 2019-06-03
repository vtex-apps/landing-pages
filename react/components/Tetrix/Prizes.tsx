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
        <p className="t-heading-1 c-emphasis">O PRÊMIO</p>
        <p className="w-90-l">
          Quem vencer o desafio será levado para uma jornada de desenvolvimento
          nas principais cidades que desenvolvem iniciativas inovadoras de
          e-commerce. É uma chance única de conhecer tudo que existe sobre
          comércio global, guiado por uma das maiores empresas desse setor no
          mundo.
        </p>
        <div>
          <p
            className={`${activeSlide === 0 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(0)}
            onClick={() => setActiveSlide(0)}
          >
            SANTIAGO
          </p>
          <p className="dn-l">
            Conheça os desafios do e-commerce na América Latina hispanohablante,
            conhecendo as características do mercado e dos clientes latinos de
            língua espanhola.
          </p>
        </div>
        <div>
          <p
            className={`${activeSlide === 1 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(1)}
            onClick={() => setActiveSlide(1)}
          >
            NOVA YORK
          </p>
          <p className="dn-l">
            Na megalópole norte-americana, desenvolva suas habilidades de
            networking, conhecendo negócios da área de tecnologia e descobrindo
            oportunidades de expansão inovadoras.
          </p>
        </div>

        <div>
          <p
            className={`${activeSlide === 2 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(2)}
            onClick={() => setActiveSlide(2)}
          >
            LONDRES
          </p>
          <p className="dn-l">
            Na terra da Rainha, aprenda como as fintechs estão revolucionando o
            mercado financeiro global, compreendendo os desafios de
            desenvolvimento, os limites das legislações locais.
          </p>
        </div>

        <div>
          <p
            className={`${activeSlide === 3 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(3)}
            onClick={() => setActiveSlide(3)}
          >
            BERLIM
          </p>
          <p className="dn-l">
            Desenvolva um olhar mais focado para os resultados de pesquisas para
            aprender a se antecipar nas decisões de negócios, visitando centros
            tecnológicos e universidades.
          </p>
        </div>

        <div>
          <p
            className={`${activeSlide === 4 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(4)}
            onClick={() => setActiveSlide(4)}
          >
            HONG KONG
          </p>
          <p className="dn-l">
            Desenvolva um olhar mais focado para os resultados de pesquisas para
            aprender a se antecipar nas decisões de negócios, visitando centros
            tecnológicos e universidades.
          </p>
        </div>

        <div>
          <p
            className={`${activeSlide === 5 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(5)}
            onClick={() => setActiveSlide(5)}
          >
            SÃO PAULO
          </p>
          <p className="dn-l">
            Entenda os diferenciais da capital paulista no cenário de comércio
            eletrônico brasileiro, reconhecendo as razões da sua importância
            para o e-commerce da América Latina. <br />
            Centro de negócios do Brasil e da América Latina: conhecer a os
            diferenciais da capital paulista no cenário do comércio eletrônico
            brasileiro e reconhecer sua posição de importância no cenário do
            e-commerce da América Latina.
          </p>
        </div>

        <div>
          <p
            className={`${activeSlide === 6 &&
              't-heading-1-l'} pointer t-heading-2 c-emphasis`}
            onMouseOver={() => setActiveSlide(6)}
            onClick={() => setActiveSlide(6)}
          >
            RIO DE JANEIRO
          </p>
          <p className="dn-l">
            Visualize na prática os desafios no desenvolvimento e na programação
            da infraestrutura necessária para a viabilização de negócios
            digitais.
          </p>
        </div>
      </div>
      <div className="w-50-l w-75 dn flex-l center">
        <Carousel heightMode="first" slideIndex={activeSlide} withoutControls>
          <img src={Santiago} alt="" />
          <img src={NewYork} alt="" />
          <img src={London} alt="" />
          <img src={Berlim} alt="" />
          <img src={HongKong} alt="" />
          <img src={SaoPaulo} alt="" />
          <img src={Rio} alt="" />
        </Carousel>
      </div>
    </section>
  )
}

export default Prizes
