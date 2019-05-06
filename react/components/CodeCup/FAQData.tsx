import React, { Fragment } from 'react'

export const questions = [
  {
    question: 'O que é a VTEX Code Cup?',
    ans:
      'É o desafio de programação da VTEX para brasileiros, onde competidores usam algoritmos para resolver o maior número de problemas no menor tempo possível. Os participantes serão selecionados em uma fase online, de onde só os melhores serão convidados para uma competir presencialmente no escritório da VTEX.',
  },
  {
    question: 'Como a VTEX Code Cup funciona?',
    ans: (
      <Fragment>
        <p>
          Inscreva-se até as 21h do dia 10 maio de 2019 para participar da
          primeira fase da VTEX Code Cup.
        </p>
        <p>
          Essa etapa acontecerá online no dia 11 de maio de 2019 as 13h (horário
          de Brasília) e terá duração de 3h30 horas.
        </p>
        <p>
          Assim que se encerrarem as inscrições os competidores receberão um
          e-mail de confirmação, com o link para acessar a plataforma da
          competição.
        </p>
        <p>
          Os primeiros 10 colocados na primeira fase serão convidados para a
          fase presencial. Ela acontecerá na tarde do dia 08 de junho de 2019 na
          sede da VTEX no Rio de Janeiro.
        </p>
        <p>
          Os finalistas competirão pela glória eterna e pelo título de campeão
          da primeira VTEX Code Cup.
        </p>
        <p>
          O campeão receberá uma viagem para acompanhar a final da ACM ICPC
          2020, na Rússia.
        </p>
      </Fragment>
    ),
  },
  {
    question: 'Quem pode participar do VTEX Code Cup?',
    ans: (
      <Fragment>
        <p>
          1. O evento é destinado somente a residentes brasileiros. Não serão
          aceitos brasileiros residindo fora do país ou que estejam em viagem
          internacional durante o Round Final.
        </p>
        <p>
          2. Qualquer pessoa que não possua algum vínculo trabalhista com a VTEX
          (incluindo estágio) ou suas associadas.
        </p>
        <p>
          3. Você deve ter no mínimo 18 anos para poder participar da etapa
          presencial.
        </p>
      </Fragment>
    ),
  },
  {
    question:
      'Caso seja convidado para a etapa presencial, a VTEX vai pagar minha passagem?',
    ans: (
      <Fragment>
        Sim! Vamos arcar com todas as despesas necessárias para viabilizar sua
        participação na Segunda Fase Final (presencial) de acordo com as
        <a href="/rules"> Regras da Competição</a>, na cláusula de Reembolso de
        Despesas de Viagem.
      </Fragment>
    ),
  },
  {
    question: 'Como me inscrevo para a VTEX Code Cup?',
    ans: (
      <Fragment>
        Clique em <strong>{'quero participar'}</strong> aqui nessa página,
        preencha seus dados e envie. Até o dia 10 de maio de 2019, as 21h você
        receberá no seu email cadastrado o link para acesso à arena da
        competição.
      </Fragment>
    ),
  },
  {
    question: 'Ainda possui alguma dúvida?',
    ans: (
      <Fragment>
        Se você ainda possui alguma dúvida que não respondemos aqui nesse FAQ,
        mande um e-mail para{' '}
        <a href={'mailto:codecup@vtex.com'}>codecup@vtex.com</a> que estamos
        disponíveis para te ajudar.
      </Fragment>
    ),
  },
]
