import React, { FunctionComponent } from 'react'

const HowItWorks: FunctionComponent = () => (
  <section className="pa7 mv8 flex flex-column flex-row-l justify-between items-center">
    <div className="w-40-l">
      <p className="t-heading-1 c-emphasis">COMO FUNCIONA?</p>
      <p className="lh-copy">
        O desafio possui 100 perguntas, divididas em 3 fases. As duas primeiras
        fases são realizadas online (remotamente), enquanto a terceira e a
        última fase acontece no Rio de Janeiro (presencialmente). Todos os
        inscritos terão acesso a primeira fase, e avançarão conforme o
        desempenho da fase anterior. O tempo que você levar para responder cada
        pergunta, impacta diretamente no resultado final.
      </p>
    </div>
    <div className="flex flex-column flex-row-l justify-between c-emphasis w-50-l w-90">
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 1 (19/07)</p>
          <p className="t-heading-1 mv2">90</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">ONLINE</p>
        </div>
      </div>
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 2 (02/08)</p>
          <p className="t-heading-1 mv2">08</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">ONLINE</p>
        </div>
      </div>
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 3 (12/10)</p>
          <p className="t-heading-1 mv2">02</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">PRESENCIAL - RJ</p>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorks
