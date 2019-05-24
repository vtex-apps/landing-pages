import React, { FunctionComponent } from 'react'

import { questions } from './FAQData'
import QuestionCard from '../CodeCup/QuestionCard'

const FAQ: FunctionComponent = () => (
  <section className="pa8 bg-base c-on-base">
    <p className="t-heading-1">F.A.Q</p>
    <p style={{ fontFamily: 'Space Mono' }}>
      Para saber mais sobre o TETRIX, o Desafio, confira as Regras do Desafio e
      as dúvidas frequentes antes de iniciar sua inscrição.
    </p>
    <div
      className="flex flex-column items-center"
      style={{ fontFamily: 'Space Mono' }}
    >
      {questions.map(q => (
        <QuestionCard question={q.question} ans={q.ans} key={q.question} />
      ))}
    </div>
  </section>
)

export default FAQ
