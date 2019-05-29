import React, { FunctionComponent } from 'react'

const HowItWorks: FunctionComponent = () => (
  <section className="pa7 mv8 flex flex-column flex-row-l justify-between items-center">
    <div className="w-40-l">
      <p className="t-heading-1 c-emphasis">COMO FUNCIONA?</p>
      <p className="lh-copy">
        O desafio possui 100 perguntas, divididas em 3 fases, sendo as duas
        primeiras online e a final presencial. Todos os inscritos terão acesso a
        primeira fase, e avançarão conforme o desempenho da fase anterior.
      </p>
    </div>
    <div className="flex flex-column flex-row-l justify-between c-emphasis w-50-l w-90">
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 1</p>
          <p className="t-heading-1 mv2">90</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">ONLINE</p>
        </div>
      </div>
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 2</p>
          <p className="t-heading-1 mv2">08</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">ONLINE</p>
        </div>
      </div>
      <div className="w-30-l mv5 mv0-l">
        <div className="b--emphasis ba pa5 tc">
          <p>FASE 3</p>
          <p className="t-heading-1 mv2">02</p>
          <p>PERGUNTAS</p>
        </div>
        <div className="b--emphasis bb bl br tc pt5">
          <p className="mt0">PRESENCIAL</p>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorks
