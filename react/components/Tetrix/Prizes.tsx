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
    <section className="pv7 flex flex-row-l flex-column justify-between w-90 center">
      <div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={Santiago} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={NewYork} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={London} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={Berlim} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={HongKong} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={SaoPaulo} alt="" />
          </div>
          <div className="relative">
            <p className="z-2 pt6 absolute w-33 dn flex-l">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              sunt perferendis quos esse qui ut, quae vitae tenetur blanditiis
              veniam ad adipisci repellat quidem aperiam labore asperiores
              aspernatur. Aliquid, pariatur!
            </p>
            <img src={Rio} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

export default Prizes
