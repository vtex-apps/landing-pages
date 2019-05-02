import React, { FunctionComponent } from 'react'

import TrophyIcon from '../../images/icone_trofeu@2x.png'
import Logo from '../../images/logo_codecup_02@2x.png'

const About: FunctionComponent = () => (
  <section className="bg-white flex w-100 pv7">
    <div className="flex justify-center" style={{ writingMode: 'vertical-lr' }}>
      <p>V T E X :: C O D E C U P</p>
    </div>
    <div className="flex items-center ml7 justify-around flex-grow-1">
      <div className="w-40">
        <h1 className="t-heading-1">o que é?</h1>
        <p className="t-heading-3 normal lh-copy">
          É a maratona de programação da VTEX para todos os aficionados por
          códigos e desafios. Nessa maratona competidores de todo o Brasil podem
          participar e testar suas habilidades.
        </p>
        <p className="t-heading-3 normal lh-copy">
          A competição possui duas fases: a primeira online, onde os
          competidores realizam uma série de contests e batalham pelas 10
          primeiras posições no ranking geral para garantir sua vaga na final
          presencial que acontecerá na sede da VTEX no Rio de Janeiro e um
          prêmio final de R$15.000 + o título de vencedor, muitas fotos,
          aplausos e reconhecimentos.
        </p>
        <img src={Logo} />
      </div>
      <div className="bg-emphasis br3 pv10 ph3 flex flex-column items-center justify-around">
        <p className="t-heading-1 c-on-muted-1 w-75 center">
          prêmio final de R$15.000 + o título.
        </p>
        <img src={TrophyIcon} className="w-50 center mv6" />
        <button className="br-pill mt6 mb3 bg-base c-on-base ph6 b--none">
          <p>quero participar</p>
        </button>
      </div>
    </div>
  </section>
)

export default About
