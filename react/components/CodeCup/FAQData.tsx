import React, { Fragment } from 'react'

export const questions = [
  {
    question: 'O que é a VTEX Code Cup?',
    ans:
      'É o desafio de programação da VTEX para brasileiros, onde competidores usam algoritmos para resolver o maior número de problemas no menor tempo possível. Os participantes serão selecionados em uma fase online, na qual os melhores serão convidados para uma competir presencialmente no escritório da VTEX no Rio de Janeiro.',
  },
  {
    question: 'Como a VTEX Code Cup funciona?',
    ans:
      'A competição possui por duas fases: Primeira Fase (online) e a Segunda Fase (final presencial). A Final presencial receberá os 10 melhores competidores da Primeira Fase, no escritório da VTEX, no Rio de Janeiro.',
  },
  {
    question: 'Quem pode participar do VTEX Code Cup?',
    ans: (
      <Fragment>
        <p>
          1. Residentes brasileiros: cada etapa será voltada apenas para
          brasileiros residentes no Brasil. Não serão aceitos brasileiros
          trabalhando fora do país ou que estejam viajando por mais de 1 mês em
          outro país.
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
        <a href="https://drive.google.com/file/d/1OLKAaJV2Caw-g8VWg357U2p06uDu94Hi/view">
          {' '}
          Regras da Competição
        </a>
        , na cláusula de Reembolso de Despesas de Viagem.
      </Fragment>
    ),
  },
  {
    question: 'Como me inscrevo para a VTEX Code Cup?',
    ans: (
      <Fragment>
        Clique em <strong>"quero participar"</strong> aqui nessa página,
        preencha seus dados e envie. Até o dia 10 de maio de 2019, as 23h você
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
        <a href="mailto:codecup@vtex.com">codecup@vtex.com</a> que estamos
        disponíveis para te ajudar.
      </Fragment>
    ),
  },
]
