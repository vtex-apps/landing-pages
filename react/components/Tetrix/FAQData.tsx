import React, { Fragment } from 'react'

export const questions = [
  {
    question: 'Até quando as inscrições estão abertas?',
    ans: 'As inscrições estarão abertas de 30 de maio a 07 de julho de 2019.',
  },
  {
    question: 'Quando começa o Desafio?',
    ans:
      'O link de acesso para a primeira fase será disponibilizado no dia 19 de julho, para todos os inscritos.',
  },
  {
    question: 'Quem pode participar do TETRIX?',
    ans:
      'Pessoas antenadas com veia empreendedora, dispostas a aprender e que querem desenvolver sua carreira no ramo dos negócios e de e-commerce, desde que preencham os seguintes requisitos: Residentes no Brasil, maiores de 18 anos, universitários ou graduados. Se você já possui graduação, deverá ter colado grau a partir do 2º semestre de 2017. ',
  },
  {
    question: 'O TETRIX possui algum custo?',
    ans:
      'Não! Você não precisa pagar nada para participar, incluindo a fase presencial, em que vamos arcar com os custos de viagem e hospedagem dos participantes que residirem fora da cidade do Rio de Janeiro.',
  },
  {
    question:
      'O que preciso saber sobre o prêmio? (Venci, quais documentações devo possuir?)',
    ans:
      'O vencedor deverá ter toda documentação necessária na data do embarque para a viagem prêmio. Isso inclui: vistos, passaporte e certificado internacional de vacinação. Se você não tiver os documentos necessários, não se preocupe! Avise-nos durante a fase final, para providenciarmos.',
  },
  {
    question: 'Ainda possui alguma dúvida?',
    ans: (
      <Fragment>
        Se você ainda possui alguma dúvida que não respondemos aqui nesse FAQ,
        mande um e-mail para{' '}
        <a href={'mailto:ola@tetrixodesafio.com'}>ola@tetrixodesafio.com</a> que
        estamos disponíveis para te ajudar.
      </Fragment>
    ),
  },
]
