import React, { FunctionComponent } from 'react'

import Go from '../../images/imagem_go_@2x.png'

const Subscribe: FunctionComponent = () => (
  <section className="flex flex-column pa6 w-90 ml-auto-l mr0-l center">
    <div className="flex flex-row-l flex-column justify-around-l items-center">
      <div>
        <p className="t-heading-1">como funciona?</p>
        <p className="lh-copy">
          Inscreva-se, no período de 03 de maio de 2019 a 10 de maio de 2019,
          até às 19h, para participar da primeira fase (online) da VTEX Code
          Cup. Essa etapa vai acontecer no dia 11 de maio de 2019, às 13h
          (horário de Brasília) e terá duração máxima de 4 horas.
        </p>
      </div>
      <div className="flex flex-column pt5">
        <p className="lh-copy">
          Os primeiros 10 colocados no ranking geral da primeira fase, serão
          convidados para a segunda fase (presencial) que acontecerá no dia 08
          de junho de 2019, na sede da VTEX, no Rio de Janeiro. Nessa etapa, os
          competidores serão submetidos a novos contest e terá duração de 5
          horas.
        </p>
        <p className="lh-copy">
          O primeiro colocado no ranking geral será o vencedor do VTEX Code Cup
          e como prêmio vai assistir a final mundial do ICPC, na Rússia em 2020,
          com a delegação oficial do Brasil.
        </p>
      </div>
    </div>
    <img src={Go} className="mv4" />
  </section>
)

export default Subscribe
