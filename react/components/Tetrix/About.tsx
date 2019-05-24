import React, { FunctionComponent } from 'react'

import Icon1 from '../../images/icone1.png'
import Icon2 from '../../images/icone2.png'
import Icon3 from '../../images/icone3.png'
import Icon4 from '../../images/icone4.png'
import Icon5 from '../../images/icone5.png'
import Icon6 from '../../images/icone6.png'
import Icon7 from '../../images/icone7.png'
import Icon8 from '../../images/icone8.png'

const About: FunctionComponent = () => {
  const iconClasses = 'w-25 pa5 flex flex-column items-center justify-center'

  return (
    <section className="pa7 flex justify-between items-center">
      <div className="w-33">
        <p className="t-heading-2 c-emphasis">O QUE É TETRIX?</p>
        <p className="t-body lh-copy" style={{ fontFamily: 'Space Mono' }}>
          É um desafio que foi desenvolvido para testar e validar os diferentes
          tipos de habilidades dos participantes, através de perguntas que
          conectam múltiplos conhecimentos com um nível de complexidade
          progressiva, direcionado a identificar diferentes perspectivas e
          buscar solucionadores.
        </p>
      </div>
      <div
        className="flex justify-around items-center flex-wrap w-60"
        style={{ fontFamily: 'Space Mono' }}
      >
        <div className={iconClasses}>
          <img src={Icon1} />
          <p className="c-emphasis tc">EVOLUÇÃO</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon2} />
          <p className="tc">CONHECIMENTO TÉCNICO E DE MERCADO</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon3} />
          <p className="c-emphasis tc">AUDÁCIA</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon4} />
          <p className="tc">PENSAMENTO LÓGICO</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon5} />
          <p className="tc">COLLECTIVE ADMIRATION</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon6} />
          <p className="c-emphasis tc">CONEXÃO</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon7} />
          <p className="tc">COMUNICAÇÃO</p>
        </div>
        <div className={iconClasses}>
          <img src={Icon8} />
          <p className="c-emphasis tc">REFERENCE VOICE</p>
        </div>
      </div>
    </section>
  )
}

export default About
