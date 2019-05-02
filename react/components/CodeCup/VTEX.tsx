import React, { FunctionComponent } from 'react'

import Logo from '../../images/logo_vtex@2x.png'
import MapImage from '../../images/01_mapa.png'

const VTEX: FunctionComponent = () => (
  <section className="bg-base--inverted flex pv7 vh-50 justify-center items-center">
    <div className="flex flex-column pl10">
      <img src={Logo} className="w-50" />
      <p>
        A VTEX é uma empresa global de tecnologia focada em produtos para
        e-commerce que impacta diariamente o trabalho de milhares de pessoas ao
        redor do mundo. Através dos seus produtos e serviços, oferece aos
        lojistas uma plataforma coesa para executar todo o seu negócio e
        proporcionar aos seus clientes sempre a melhor experiência de compra.
      </p>
    </div>
    <div className="flex flex-column">
      <img src={MapImage} className="w-40" />
      <button className="bg-emphasis w-40">
        <p className="c-on-base">quero participar</p>
      </button>
    </div>
  </section>
)

export default VTEX
