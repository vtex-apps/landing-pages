import React, { FunctionComponent } from 'react'

import Logo from '../../images/logo_vtex@2x.png'
import MapImage from '../../images/01_mapa.png'

const VTEX: FunctionComponent = () => (
  <section className="bg-base--inverted">
    <div className="flex pv9 justify-center items-center w-90 ml-auto">
      <div className="flex flex-column w-60">
        <img src={Logo} className="w-60" />
        <p className="t-body lh-copy">
          A VTEX é uma empresa global de tecnologia focada em produtos para
          e-commerce que impacta diariamente o trabalho de milhares de pessoas
          ao redor do mundo. Através dos seus produtos e serviços, oferece aos
          lojistas uma plataforma coesa para executar todo o seu negócio e
          proporcionar aos seus clientes sempre a melhor experiência de compra.
        </p>
      </div>
      <div className="flex flex-column justify-between items-center">
        <img src={MapImage} className="w-75" />
        <button className="br-pill w-40 center mt6 mb3 bg-emphasis c-on-base ph9 b--none z-5">
          <p className="t-heading-4">quero participar</p>
        </button>
      </div>
    </div>
  </section>
)

export default VTEX
