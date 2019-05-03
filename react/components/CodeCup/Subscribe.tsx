import React, { FunctionComponent } from 'react'

import Go from '../../images/imagem_go_@2x.png'

const Subscribe: FunctionComponent = () => (
  <section className="flex flex-column pa6">
    <div className="flex flex-row-l flex-column justify-around-l items-center w-90 ml-auto-l mr0-l center">
      <p className="c-emphasis t-heading-1 w-50-l">
        Inscreva-se e desafie seus limites.
      </p>
      <div className="w-40-l">
        <p className="t-heading-1">como funciona?</p>
        <p className="lh-copy">
          Inscreva-se, no período de 03 de maio de 2019 a 10 de maio de 2019,
          até às 19h, para participar da primeira fase (online) da VTEX Code
          Cup. Essa etapa vai acontecer no dia 11 de maio de 2019, às 13h
          (horário de Brasília) e terá duração máxima de 4 horas.
        </p>
      </div>
    </div>
    <img src={Go} className="w-90 ml-auto-l mv4" />
    <div className="flex flex-column flex-row-l justify-end-l items-start-l items-end w-90 ml-auto-l center">
      <p className="w-40-l mh5-l lh-copy z-5-l">
        Os primeiros 10 colocados no ranking geral da primeira fase, serão
        convidados para a segunda fase (presencial) que acontecerá no dia 08 de
        junho de 2019, na sede da VTEX, no Rio de Janeiro. Nessa etapa, os
        competidores serão submetidos a novos contest e terá duração de 5 horas.
      </p>
      <p className="w-40-l mh5-l lh-copy z-5-l">
        O primeiro colocado no ranking geral será o vencedor do VTEX Code Cup e
        como prêmio vai assistir a final mundial do ICPC, na Rússia em 2020, com
        a delegação oficial do Brasil.
      </p>
    </div>
  </section>
)

export default Subscribe
