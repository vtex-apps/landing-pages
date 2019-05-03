import React, { FunctionComponent } from 'react'

import Go from '../../images/imagem_go_@2x.jpg'

const Subscribe: FunctionComponent = () => (
  <section className="flex flex-column pa6 vh-100-l">
    <div className="flex flex-row-l flex-column justify-around-l items-center w-90 ml-auto-l center">
      <p className="c-emphasis t-heading-1 w-50-l">
        Inscreva-se e desafie seus limites.
      </p>
      <div className="w-40-l">
        <p className="t-heading-1">como funciona?</p>
        <p className="lh-copy">
          Inscreva-se para participar do Round 1 online, no período de Tuesday,
          May 3, 2019 at 19:00 GMT-3 and end on Friday, 10, 2019 at 19:00 GMT-3,
          essa etapa dura no máximo 4 horas e vai acontecer no dia 11 de maio de
          2019 às 13horas. Você receberá no seu email de cadastro o link para
          acessar a arena de competição.
        </p>
      </div>
    </div>
    <img src={Go} className="w-90 ml-auto-l" />
    <div className="flex flex-row-reverse-l w-90 ml-auto-l center">
      <p className="w-40-l lh-copy z-5-l">
        Os primeiros 10 colocados no ranking geral do Round 1, serão convidados
        para o Round 2, etapa presencial, que acontecerá no dia 22 de junho de
        2019, na sede da VTEX, no Rio de Janeiro. Nessa etapa os competidores
        serão submetidos a novos contest e durará 5 horas. O primeiro colocado
        no ranking geral será o vencedor do VTEX Code Cup receberá o título e
        R$15.000
      </p>
    </div>
  </section>
)

export default Subscribe
